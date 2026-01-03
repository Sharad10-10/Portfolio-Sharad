import { NextResponse } from "next/server"
import { Resend } from "resend"

export const POST = async(req)=> {
    const {userName, email, message} = await req.json()
    const resend = new Resend(process.env.RESEND_API_KEY)

    try{
        const data = await resend.emails.send({
            from: "Portfolio contact <onboarding@resend.dev>",
            to: process.env.MY_EMAIL,
            replyTo: email,
            subject: `Portfolio contact from ${userName}`,
            html: `
                 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #007BFF;">New Contact Form Submission 📬</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${userName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #6A7280; font-size: 12px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>`
        })

        return NextResponse.json({
            success: true,
            message: "Email sent successfully...",
            data
        },{status:200})
    }

    catch(error) {
        return NextResponse.json({
            success: false,
            message: "Failed to send the email",
            error
        }, {status: 500})
    }
}