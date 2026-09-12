export const config = { runtime: 'edge' };

import { Resend } from 'resend';

const RECIPIENT = 'os.archivum@proton.me';
const SENDER    = 'Authentication Form <form@schlemmer.org>';

const CHECKBOXES = [
  'Authentication',
  'Reproduction-Publication',
  'Provenance-Research',
  'Art-Market',
  'Academia',
  'Media',
  'Trademark-Request',
] as const;

const CHECKBOX_LABELS: Record<string, string> = {
  'Authentication':           'Authentication Application',
  'Reproduction-Publication': 'Reproduction, Publication Application',
  'Provenance-Research':      'Provenance Research',
  'Art-Market':               'Art Market',
  'Academia':                 'Academia',
  'Media':                    'Media',
  'Trademark-Request':        'Trademark Request',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: FormData;
  try {
    body = await req.formData();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  const get = (key: string) => (body.get(key) as string | null)?.trim() ?? '';

  const firstName   = get('First-Name');
  const lastName    = get('Last-Name');
  const email       = get('Email');
  const telephone   = get('Telephone-Contact-including-country-code');
  const institution = get('Institution');
  const street      = get('Street');
  const city        = get('City-and-Zip-code');
  const country     = get('Country');
  const reference   = get('Reference');
  const website     = get('Website');
  const requestText = get('Request');

  if (!firstName || !lastName || !email || !telephone || !institution || !street || !city || !country || !requestText) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const checkedCategories = CHECKBOXES
    .filter(id => body.get(id) === 'on')
    .map(id => CHECKBOX_LABELS[id]);

  const html = `
<table style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:620px">
  <tr><td colspan="2" style="padding:0 0 16px;font-size:18px;font-weight:bold;border-bottom:1px solid #ddd">
    Authentication Form Submission
  </td></tr>
  <tr><td style="padding:10px 16px 4px 0;font-weight:bold;white-space:nowrap">Name</td>
      <td style="padding:10px 0 4px">${firstName} ${lastName}</td></tr>
  <tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Email</td>
      <td style="padding:4px 0"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Telephone</td>
      <td style="padding:4px 0">${telephone}</td></tr>
  <tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Institution</td>
      <td style="padding:4px 0">${institution}</td></tr>
  <tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Address</td>
      <td style="padding:4px 0">${street}, ${city}, ${country}</td></tr>
  ${reference ? `<tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Reference</td>
      <td style="padding:4px 0">${reference}</td></tr>` : ''}
  ${website ? `<tr><td style="padding:4px 16px 4px 0;font-weight:bold;white-space:nowrap">Website</td>
      <td style="padding:4px 0"><a href="${website}">${website}</a></td></tr>` : ''}
  <tr><td style="padding:12px 16px 4px 0;font-weight:bold;vertical-align:top;white-space:nowrap">Request</td>
      <td style="padding:12px 0 4px;white-space:pre-wrap">${requestText}</td></tr>
  ${checkedCategories.length ? `<tr><td style="padding:12px 16px 4px 0;font-weight:bold;vertical-align:top;white-space:nowrap">Categories</td>
      <td style="padding:12px 0 4px">${checkedCategories.join('<br>')}</td></tr>` : ''}
</table>`;

  const text = [
    'Authentication Form Submission',
    '---',
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Telephone: ${telephone}`,
    `Institution: ${institution}`,
    `Address: ${street}, ${city}, ${country}`,
    reference   ? `Reference: ${reference}` : '',
    website     ? `Website: ${website}` : '',
    `\nRequest:\n${requestText}`,
    checkedCategories.length ? `\nCategories: ${checkedCategories.join(', ')}` : '',
  ].filter(Boolean).join('\n');

  try {
    const { error } = await resend.emails.send({
      from: SENDER,
      to: RECIPIENT,
      replyTo: email,
      subject: `Authentication enquiry — ${firstName} ${lastName} (${institution})`,
      html,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
