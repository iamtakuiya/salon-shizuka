#!/usr/bin/env node
import nodemailer from 'nodemailer';
import { setTransporterForTest, sendNewsletterNotification } from '../src/services/email.service';

(async () => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const testTransporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Inject Ethereal transporter into the email service
    setTransporterForTest(testTransporter);
    console.log('Using Ethereal test account:', testAccount.user);

    const info = await sendNewsletterNotification('integration-test@example.com');
    console.log('Sent message id:', info?.messageId || info?.response);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info) || 'N/A');
    process.exit(0);
  } catch (err) {
    console.error('Newsletter integration test failed:', err);
    process.exit(1);
  }
})();
