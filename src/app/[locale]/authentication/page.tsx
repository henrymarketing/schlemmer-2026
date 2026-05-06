import type { Metadata } from 'next'
import { submitAuthentication } from './actions'

export const metadata: Metadata = {
  title: 'Authentication — Oskar Schlemmer Theatre Archives',
  description: 'Apply for authentication of works by Oskar Schlemmer.',
}

type Props = { searchParams: Promise<{ submitted?: string }> }

const CATEGORIES = [
  { value: 'authentication', label: 'Authentication Application' },
  { value: 'reproduction', label: 'Reproduction / Publication' },
  { value: 'provenance', label: 'Provenance Research' },
  { value: 'artmarket', label: 'Art Market' },
  { value: 'academia', label: 'Academia' },
  { value: 'media', label: 'Media' },
  { value: 'trademark', label: 'Trademark Request' },
]

export default async function AuthenticationPage({ searchParams }: Props) {
  const { submitted } = await searchParams

  if (submitted === '1') {
    return (
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-20">
        <h1 className="text-sm tracking-[0.2em] uppercase mb-8">Authentication</h1>
        <p className="text-base mb-4">Thank you for your submission.</p>
        <p className="text-sm text-[var(--color-muted)]">
          Your application has been received. We will review your request and respond as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-sm tracking-[0.2em] uppercase mb-2">Authentication of Works by Oskar Schlemmer</h1>
      <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-muted)] mb-10">Application Form</p>

      <div className="prose-schlemmer text-sm mb-10 space-y-4">
        <p>
          We invite collectors, auction houses, art dealers, and institutions to submit works for consideration.
          The Oskar Schlemmer Theatre Archives reviews each application carefully and will respond in due course.
        </p>
        <p>
          We also welcome information relating to works by Oskar Schlemmer in private or public collections,
          including works not yet recorded in the literature. All enquiries are treated with strict confidentiality.
        </p>
        <p>
          For reference on published catalogue literature, please consult the{' '}
          <a href="/catalogue-raisonne" className="underline underline-offset-2">Catalogue Raisonné</a> page.
        </p>
      </div>

      <form action={submitAuthentication} className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="firstName" name="firstName" type="text" required className="form-input" />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="lastName" name="lastName" type="text" required className="form-input" />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="form-label">
              Email <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="email" name="email" type="email" required className="form-input" />
          </div>
          <div>
            <label htmlFor="phone" className="form-label">
              Telephone <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required className="form-input" />
          </div>
        </div>

        {/* Institution */}
        <div>
          <label htmlFor="institution" className="form-label">
            Institution <span className="text-[var(--color-muted)]">*</span>
          </label>
          <input id="institution" name="institution" type="text" required className="form-input" />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="street" className="form-label">
            Street <span className="text-[var(--color-muted)]">*</span>
          </label>
          <input id="street" name="street" type="text" required className="form-input" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="form-label">
              City <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="city" name="city" type="text" required className="form-input" />
          </div>
          <div>
            <label htmlFor="zip" className="form-label">
              ZIP / Postal Code <span className="text-[var(--color-muted)]">*</span>
            </label>
            <input id="zip" name="zip" type="text" required className="form-input" />
          </div>
        </div>

        <div>
          <label htmlFor="country" className="form-label">
            Country <span className="text-[var(--color-muted)]">*</span>
          </label>
          <input id="country" name="country" type="text" required className="form-input" />
        </div>

        {/* Optional contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="reference" className="form-label">Reference</label>
            <input id="reference" name="reference" type="text" className="form-input" />
          </div>
          <div>
            <label htmlFor="website" className="form-label">Website</label>
            <input id="website" name="website" type="url" className="form-input" placeholder="https://" />
          </div>
        </div>

        {/* Request type */}
        <div>
          <label htmlFor="requestType" className="form-label">
            Type of Request <span className="text-[var(--color-muted)]">*</span>
          </label>
          <textarea
            id="requestType"
            name="requestType"
            required
            rows={4}
            className="form-input resize-none"
            placeholder="Please describe the work and the nature of your request…"
          />
        </div>

        {/* Categories */}
        <fieldset>
          <legend className="form-label mb-3">Categories</legend>
          <div className="space-y-2">
            {CATEGORIES.map(({ value, label }) => (
              <label key={value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="categories"
                  value={value}
                  className="form-checkbox"
                />
                <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-fg)] transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Declaration */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-[var(--color-muted)] mb-4 leading-relaxed">
            All information submitted through this form is treated with strict confidentiality and used solely
            for the purpose of processing your authentication request. Your data will not be shared with
            third parties without your consent.
          </p>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="declarationAccepted"
              required
              className="form-checkbox mt-0.5 shrink-0"
            />
            <span className="text-sm">
              I declare that the information provided is accurate to the best of my knowledge, and I agree to
              the confidentiality terms above.{' '}
              <span className="text-[var(--color-muted)]">*</span>
            </span>
          </label>
        </div>

        <div className="pt-2">
          <button type="submit" className="btn-primary">
            Submit Application
          </button>
          <p className="text-xs text-[var(--color-muted)] mt-4">
            Fields marked <span className="text-[var(--color-fg)]">*</span> are mandatory.
          </p>
        </div>
      </form>
    </div>
  )
}
