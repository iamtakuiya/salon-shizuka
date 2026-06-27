import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../db/client';
import { logger } from '../services/logger.service';
import { sendNewsletterNotification } from '../services/email.service';

export const subscribeNewsletter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body as { email: string };

    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (!existing) {
      await prisma.newsletter.create({ data: { email } });
      await sendNewsletterNotification(email);
      logger.info('Newsletter subscription created and owner notified', { email });
    } else {
      logger.info('Newsletter subscription already exists', { email });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    logger.error('subscribeNewsletter error', { error: String(err) });
    next(err);
  }
};
