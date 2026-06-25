// import type { Request, Response, NextFunction } from 'express';
// import { bookingService } from '../services/booking.service';
// import { logger } from '../services/logger.service';

// export const createBooking = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const booking = await bookingService.create(req.body);
//     res.status(200).json({ success: true, id: booking.id });
//   } catch (err) {
//     logger.error('createBooking controller error', { error: String(err) });
//     next(err);
//   }
// };
import type { Request, Response, NextFunction } from 'express';
import { bookingService } from '../services/booking.service';
import { logger } from '../services/logger.service';

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Create the database record first (This is fast and won't timeout)
    const booking = await bookingService.createRecordOnly(req.body); 
    
    // 2. Return success immediately so the frontend clears the loading state
    res.status(200).json({ success: true, id: booking.id });

    // 3. Fire notifications in the background asynchronously
    (async () => {
      try {
        logger.info('Starting background notifications for booking:', { id: booking.id });
        await bookingService.sendNotifications(booking);
        logger.info('All background notifications dispatched successfully.');
      } catch (notifyErr) {
        logger.error('Background notification processing failed', { error: String(notifyErr) });
      }
    })();

  } catch (err) {
    logger.error('createBooking controller error', { error: String(err) });
    next(err);
  }
};