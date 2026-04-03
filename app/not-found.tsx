// app/not-found.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NotFound() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const popularLinks = [
    { href: '/blog', label: 'Tech Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl w-full px-6 py-12 text-center">
        {/* Large 404 */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          404
        </h1>

        {/* Friendly message */}
        <p className="text-2xl font-medium text-gray-800 mb-2">
          Oops, this page got lost
        </p>
        <p className="text-gray-600 mb-8">
          This link might be outdated or the page has moved.<br/>
          Don't worry — try these ways to continue exploring:
        </p>

        {/* Search box */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for what you need..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular links */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Or visit these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}