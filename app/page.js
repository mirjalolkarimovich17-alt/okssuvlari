'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Redirect to index.html - yangi dizayn
    window.location.href = '/index.html'
  }, [])

  return null
}
