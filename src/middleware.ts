import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|api|admin|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|txt|xml|json)$).*)',
  ],
}
