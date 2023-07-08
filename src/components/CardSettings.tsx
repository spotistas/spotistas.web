import { Icon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
interface CardSettingProps {
  title: string
  description: string
  buttonTitle: string
  href: string
  icon: Icon
}

export function CardSettings({
  title,
  description,
  buttonTitle,
  href,
  icon: Icon,
}: CardSettingProps) {
  return (
    <section className="flex flex-col  rounded-3xl bg-bgFooter pt-5 text-center text-white sm:max-w-[555px] ">
      <div className="flex flex-col items-center md:flex-row-reverse md:p-16 md:px-8">
        <Icon
          weight="fill"
          className="h-[100px] w-[100px] md:h-[136px] md:w-[136px]"
        />
        <div className=" w-full ">
          <div className=" py-4 px-8">
            <h1 className="mb-2 font-gotham text-2xl font-bold md:mb-7 md:text-3xl">
              {title}
            </h1>
            <p className="font-poppins font-medium text-white/50 ">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 md:py-5">
        <Link to={href} className=" font-poppins text-xl font-bold text-green">
          {buttonTitle}
        </Link>
      </div>
    </section>
  )
}
