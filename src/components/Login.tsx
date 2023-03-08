interface Props {
    buttonText: string;
}

export function Login({buttonText}:Props) {
    return(
        <button
        className='bg-greenButton md:text-base text-sm font-poppins font-medium md:px-12 md:py-4 px-10 py-3 rounded-full'
        >
            {buttonText}
        </button>
    )
}