import { ReactNode } from 'react'

interface CardSectionHorizontalProps {
  children: ReactNode
}

export function CardSectionHorizontal({
  children,
}: CardSectionHorizontalProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[20px] bg-bgFooter px-5 py-10 font-gotham text-white md:items-start  md:py-9 md:px-9">
      {children}
    </div>
  )
}
