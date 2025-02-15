import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const { name, email, phone, domain, customDomain, message } = await req.json();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    // Styled email template for the user
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        <h2 style="color: #333; text-align: center;">📩 We Received Your Contact Request</h2>
        <p style="color: #555;">Hello <strong>${name}</strong>,</p>
        <p style="color: #555;">
          Thank you for reaching out! We have received your request and will get back to you as soon as possible.
        </p>

        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #444; margin-bottom: 10px;">📌 The details filled by you are:</h4>
          <p><strong>🔹 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📞 Phone:</strong> ${phone}</p>
          <p><strong>🌐 Domain:</strong> ${domain === "Other" ? customDomain : domain}</p>
          <p><strong>📝 Message:</strong> ${message}</p>
        </div>

        <p style="margin-top: 20px; text-align: center; color: #777;">
          🚀 Stay tuned! We will contact you soon.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

        <footer style="text-align: center; color: #888; font-size: 12px;">
          &copy; ${new Date().getFullYear()} Web Waverz. All rights reserved.
        </footer>
      </div>
    `;

    // Styled email template for admin (Your email)
    const adminEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        <h2 style="color: #333; text-align: center;">📩 New Contact Request</h2>
        <p style="color: #555;">You have received a new contact request with the following details:</p>

        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #444; margin-bottom: 10px;">📌 Contact Details:</h4>
          <p><strong>🔹 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📞 Phone:</strong> ${phone}</p>
          <p><strong>🌐 Domain:</strong> ${domain === "Other" ? customDomain : domain}</p>
          <p><strong>📝 Message:</strong> ${message}</p>
        </div>

        <p style="margin-top: 20px; text-align: center; color: #777;">
          🚀 Please follow up with the user as soon as possible.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

        <footer style="text-align: center; color: #888; font-size: 12px;">
          &copy; ${new Date().getFullYear()} Web Waverz. All rights reserved.
        </footer>
      </div>
    `;

    // Send email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Contact Request",
      html: emailTemplate,
    });

    // Send email to your admin email (your email from .env)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Admin email (same as your email in .env)
      subject: "New Contact Request Received",
      html: adminEmailTemplate,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
