'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'

export async function submitAuthentication(formData: FormData) {
  const payload = await getPayload({ config })

  const categories = formData.getAll('categories') as string[]

  await payload.create({
    collection: 'authentication-requests',
    data: {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      institution: (formData.get('institution') as string) || undefined,
      street: (formData.get('street') as string) || undefined,
      city: (formData.get('city') as string) || undefined,
      zip: (formData.get('zip') as string) || undefined,
      country: (formData.get('country') as string) || undefined,
      reference: (formData.get('reference') as string) || undefined,
      website: (formData.get('website') as string) || undefined,
      requestType: formData.get('requestType') as string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      categories: categories.length > 0 ? (categories as any) : undefined,
      declarationAccepted: formData.get('declarationAccepted') === 'on',
    },
  })

  redirect('/authentication?submitted=1')
}
