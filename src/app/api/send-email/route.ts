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

 const clientEmailContent = `
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

 const userThankYouHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; background: #282828; color: #F8F8F8F2; padding: 20px; border-radius: 10px;">
            <h2 style="color: #D4541D;">Thank you for your inquiry, ${fullName}!</h2>
            <p>We have received your request and are excited to review your project details. We will get back to you within the next 24 hours.</p>
            <p>Best regards,<br/>The Webpioneers Team</p>
        </div>
    `;

 try {
    // 1. Send the thank-you email to the user
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email, // Send to the user's email directly
        subject: `Thank you for your inquiry, ${fullName}`,
        text: 'Thank you for your inquiry...', // Simple text fallback
        html: userThankYouHtml,
    });
    console.log('Thank you email sent to user successfully');

    // 2. Send the form details to both client emails
    const clientRecipients = [process.env.CLIENT_EMAIL, process.env.CLIENT_EMAIL_2].filter(Boolean) as string[];
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: clientRecipients,
        subject: `New Quote Request from ${fullName}`,
        text: clientEmailContent,
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
    console.log('Form details sent to client emails successfully');
    
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
