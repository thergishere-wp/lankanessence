import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, country, travelDates, groupSize, interests, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Lankan Essence Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'info.lankanessence@gmail.com'],
      replyTo: email,
      subject: `New Tour Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #F5F0E8;">
          <div style="background: #1A4731; padding: 30px; margin-bottom: 30px;">
            <h1 style="color: #D4A017; font-size: 24px; margin: 0;">New Tour Inquiry</h1>
            <p style="color: #F5F0E8; margin: 8px 0 0;">Lankan Essence Website</p>
          </div>
          <div style="background: white; padding: 30px; border-left: 4px solid #D4A017;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0; color: #333;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Email</td><td style="padding: 8px 0; color: #333;">${email}</td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Phone</td><td style="padding: 8px 0; color: #333;">${phone}</td></tr>` : ''}
              ${country ? `<tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Country</td><td style="padding: 8px 0; color: #333;">${country}</td></tr>` : ''}
              ${travelDates ? `<tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Travel Dates</td><td style="padding: 8px 0; color: #333;">${travelDates}</td></tr>` : ''}
              ${groupSize ? `<tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Group Size</td><td style="padding: 8px 0; color: #333;">${groupSize}</td></tr>` : ''}
              ${interests ? `<tr><td style="padding: 8px 0; color: #1A4731; font-weight: bold;">Interests</td><td style="padding: 8px 0; color: #333;">${interests}</td></tr>` : ''}
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #EDE8E0;">
              <p style="color: #1A4731; font-weight: bold; margin-bottom: 8px;">Message</p>
              <p style="color: #333; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
