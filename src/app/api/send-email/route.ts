import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
fullName: string;
companyName: string;
phoneNumber: string;
email: string;
service: string;
budget: string;
projectDetail: string;
}

export async function POST(request: Request) {
try {
 let data: FormData;
 try {
 data = await request.json();
 } catch (e) {
 return NextResponse.json(
  { success: false, error: "Invalid JSON format" },
  { status: 400 }
 );
 }

 const { fullName, companyName, phoneNumber, email, service, budget, projectDetail } = data;



 // Server-side validation
 if (!fullName || !phoneNumber || !email || !projectDetail ) {
 return NextResponse.json(
  { success: false, error: "Missing required fields" },
  { status: 400 }
 );
 }
  // NOTE: For now, we will use a Gmail SMTP host
 const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
 port: 587,
 secure: false,
 auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
 },
 tls: {
  rejectUnauthorized: false,
 },
 });

 const emailContent = `
 📩 New Quote Request Submission:

 👤 Full Name: ${fullName}
 ✉️ Email: ${email}
 🏢 Company: ${companyName}
 📱 Phone Number: ${phoneNumber}
 🛠️ Service: ${service}
 💰 Budget: ${budget}
 📝 Project Detail:
 ${projectDetail}
 `;

 // Use a promise and 'fire-and-forget' pattern
try {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CLIENT_EMAIL || email,
        subject: `Quote Request from ${fullName}`,
        text: emailContent,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; background: #282828; color: #F8F8F8F2; padding: 20px; border-radius: 10px;">
                <h2 style="color: #D4541D;">📩 New Quote Request Submission</h2>
                <p><strong>👤 Full Name:</strong> ${fullName}</p>
                <p><strong>✉️ Email:</strong> ${email}</p>
                <p><strong>🏢 Company:</strong> ${companyName}</p>
                <p><strong>📱 Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>🛠️ Service:</strong> ${service}</p>
                <p><strong>💰 Budget:</strong> ${budget}</p>
                <hr style="border-color: #393939;">
                <h3 style="color: #D4541D;">📝 Project Detail:</h3>
                <p>${projectDetail.replace(/\n/g, "<br>")}</p>
            </div>
        `,
    });
    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ success: true });
} catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
        {
            success: false,
            error: "Failed to send email. Please try again.",
            details: process.env.NODE_ENV === "development" ? (error as Error).message : null,
        },
        { status: 500 }
    );
}

} catch (error) {
 console.error("Error in API route:", error);
 return NextResponse.json(
 {
  success: false,
  error: "Internal server error",
  details: process.env.NODE_ENV === "development" ? (error as Error).message : null,
 },
 { status: 500 }
 );
}
}
