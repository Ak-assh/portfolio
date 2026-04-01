import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",

            to: ["akash0025ltr@gmail.com"], // Email

            subject: `New message from ${name}`,

            replyTo: email, // ✅ FIXED HERE

            html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json(data);

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}