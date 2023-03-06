interface Props {
    buttonText: string;
}

export function Login({buttonText}:Props) {
    return(
        <button
        className='bg-greenButton text-base font-poppins font-medium px-12 py-4 rounded-full'
        >
            {buttonText}
        </button>
    )
}