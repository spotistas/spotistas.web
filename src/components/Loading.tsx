import { CircleNotch } from "@phosphor-icons/react"



export function Loading() {

    return (
        <div className="flex justify-center items-center m-auto w-full h-full bg-bgMain">
            <CircleNotch className="animate-spin text-greenButton" size={32} weight="bold" />
        </div>


    )
}