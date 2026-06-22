// shared/schemas/bookingSchema.ts
//
// Single source of truth for booking validation — imported by both:
//   - apps/web  (React Hook Form resolver for the contact step)
//   - apps/api  (Express Zod middleware, validateBooking.ts)
//
// Do not duplicate these shapes elsewhere — update here only.

import { z } from 'zod';

// ─── Contact fields only ──────────────────────────────────────────────
// Name + email step. Date, time, services, and addons live in Redux —
// not validated here.
export const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください').max(100),
  email: z.string().email('有効なメールアドレスを入力してください'),
});

export type ContactFields = z.infer<typeof contactSchema>;

// ─── Line item shape — shared by services and addons ─────────────────
const serviceItemSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  price: z.number().min(0),
});

// ─── Full booking payload ─────────────────────────────────────────────
// Used by the Express /api/booking Zod middleware AND by the frontend
// bookingService when typing the POST body.
//
// `total` is intentionally NOT part of this schema — it is always
// recalculated server-side from `services` + `addons`. Never trust a
// client-sent total.
export const bookingSchema = z.object({
  name: z.string().min(1, '名前は必須です').max(100),
  email: z.string().email('有効なメールアドレスを入力してください'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '日付形式が正しくありません'),
  time: z.string().regex(/^\d{2}:\d{2}$/, '時間形式が正しくありません'),
  services: z.array(serviceItemSchema).min(1, 'メニューを選択してください'),
  addons: z.array(serviceItemSchema),
});

export type BookingPayload = z.infer<typeof bookingSchema>;