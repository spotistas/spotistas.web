import { CircleNotch } from '@phosphor-icons/react'

export function Loading() {
  return (
    <div className="m-auto flex h-full w-full items-center justify-center bg-bgMain">
      <CircleNotch
        className="animate-spin text-green"
        size={32}
        weight="bold"
      />
    </div>
  )
}
