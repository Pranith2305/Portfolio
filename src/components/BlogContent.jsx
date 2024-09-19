import React from 'react'
import HeroImage from './HeroImage'
export default function BlogContent() {
  return (
        <div className="relative">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="pt-20 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          About
        </h2>
        <p className="mt-4 text-zinc-400">
        Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <HeroImage/>
    </div>
  )
}
