import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(
    process.env.RESEND_API_KEY
)

export async function POST(req: Request) {

    try {

        const { name, email, subject, message } =
            await req.json()

        /* Validation */

        if (!name || !email || !message) {

            return NextResponse.json(
                { success: false, error: "Missing fields" },
                { status: 400 }
            )

        }

        /* Send Email */

        await resend.emails.send({

            from: "Portfolio <onboarding@resend.dev>",

            to: process.env.EMAIL_TO!,

            subject: `Portfolio Message: ${subject || "New Message"}`,

            replyTo: email,

            html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `

        })

        return NextResponse.json(
            { success: true },
            { status: 200 }
        )

    }

    catch (error) {

        console.error("Resend Error:", error)

        return NextResponse.json(
            { success: false },
            { status: 500 }
        )

    }

}