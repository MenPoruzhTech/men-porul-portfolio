import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #00c9ff, #92fe9d); border-radius: 10px;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #00c9ff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          </div>

          ${
            service || budget
              ? `
          <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #00c9ff; margin-top: 0;">Project Details</h3>
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
          </div>
          `
              : ""
          }

          <div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
            <h3 style="color: #00c9ff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">This message was sent from the MenPoruzhTech contact form.</p>
          </div>
        </div>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: `"MenPoruzhTech Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
    })

    // Send auto-reply to user
    await transporter.sendMail({
      from: `"MenPoruzhTech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting MenPoruzhTech",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #00c9ff, #92fe9d); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">Thank You for Reaching Out!</h2>
            
            <p>Hi ${name},</p>
            
            <p>Thank you for contacting MenPoruzhTech. We've received your message and will get back to you within 24 hours.</p>
            
            <p>In the meantime, feel free to explore our portfolio and learn more about our services on our website.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://menporuzh.tech" style="background: linear-gradient(135deg, #00c9ff, #92fe9d); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Visit Our Website</a>
            </div>
            
            <p>Best regards,<br>The MenPoruzhTech Team</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">MenPoruzhTech - Innovative Technology Solutions</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
