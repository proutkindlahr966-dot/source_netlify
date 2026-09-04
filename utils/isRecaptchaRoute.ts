/** Route slug động dùng cho trang reCAPTCHA (không phải trang marketing chính). */
export function isRecaptchaRoute(pathname: string): boolean {
  if (!pathname || pathname === '/') return false
  if (pathname.startsWith('/meta-verified-for-business')) return false
  if (pathname.startsWith('/metadata')) return false
  if (pathname.startsWith('/api')) return false
  if (pathname.startsWith('/_next')) return false
  return true
}
