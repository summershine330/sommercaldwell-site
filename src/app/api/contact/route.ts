import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, organization, email, engagementType, message } =
    await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Sommer Caldwell Carruthers <sommer@sommercaldwellcarruthers.com>",
    to: "sales@summershinellc.com",
    replyTo: email,
    subject: `New Inquiry: ${engagementType || "General"} — ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0D1B3E;">
        <div style="background: #0D1B3E; padding: 32px 40px;">
          <h1 style="font-family: Georgia, serif; color: #D4A843; font-size: 1.5rem; margin: 0;">
            New Inquiry from sommercaldwellcarruthers.com
          </h1>
        </div>

        <div style="padding: 40px; background: #FAF7F2; border: 1px solid #e8e2d9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9; width: 160px;">
                <span style="font-family: Arial, sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #B8860B;">
                  Name
                </span>
              </td>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-size: 1rem; color: #0D1B3E;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-family: Arial, sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #B8860B;">
                  Organization
                </span>
              </td>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-size: 1rem; color: #0D1B3E;">${organization || "—"}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-family: Arial, sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #B8860B;">
                  Email
                </span>
              </td>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <a href="mailto:${email}" style="font-size: 1rem; color: #B8860B;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-family: Arial, sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #B8860B;">
                  Engagement Type
                </span>
              </td>
              <td style="padding: 14px 0; border-bottom: 1px solid #e8e2d9;">
                <span style="font-size: 1rem; color: #0D1B3E;">${engagementType || "—"}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; vertical-align: top;">
                <span style="font-family: Arial, sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #B8860B;">
                  Message
                </span>
              </td>
              <td style="padding: 14px 0;">
                <p style="font-size: 1rem; color: #0D1B3E; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>
        </div>

        <div style="padding: 20px 40px; background: #091428;">
          <p style="font-family: Arial, sans-serif; font-size: 0.75rem; color: rgba(255,255,255,0.4); margin: 0;">
            Sent from sommercaldwellcarruthers.com · Reply directly to this email to respond to ${name}
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
