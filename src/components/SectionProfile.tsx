import { ReactNode } from 'react'

interface SectionProfileProps {
  title: string
  children: ReactNode
}

export function SectionProfile({ title, children }: SectionProfileProps) {
  return (
    <section className="w-full">
      <h1 className="mb-[32px] text-center font-gotham text-4xl font-bold text-white md:text-left md:text-5xl">
        {title}
      </h1>
      {children}
    </section>
  )
}
