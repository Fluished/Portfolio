import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerEmail = process.env.OWNER_EMAIL || "";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
        console.error(error);
        return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
}