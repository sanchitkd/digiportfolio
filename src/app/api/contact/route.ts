import { z } from "zod";
import type { NextRequest } from "next/server";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }
    // TODO: integrate email provider (resend/nodemailer)
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}


