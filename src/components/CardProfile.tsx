import { useState } from 'react'

export function CardProfile({ cardData }: any) {
  const itemsToShowInitially = 10
  const [showAllItems, setShowAllItems] = useState(false)
  const visibleItems = showAllItems ? cardData.length : itemsToShowInitially

  function handleShowMore(): void {
    setShowAllItems(true)
  }

  function handleShowLess(): void {
    setShowAllItems(false)
  }

  return (
    <div className=" w-full rounded-lg bg-bgFooter">
      <ul className="p-4 md:px-28 md:py-10">
        {cardData.slice(0, visibleItems).map((item: any, index: number) => (
          <li
            key={index}
            className="overflow-hidden border-b-[0.5px] border-white/10 py-5"
          >
            <div className="flex items-center gap-4 md:gap-11">
              <span className="min-w-[33px] text-right font-gotham text-2xl font-bold text-white/50 md:min-w-[50px] md:text-4xl">
                {index + 1}
              </span>
              {item.name ? (
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="min-w-[56px] max-w-[56px] rounded-lg md:max-w-[77px]"
                  />

                  <div>
                    <h1 className="truncate font-gotham text-xl font-bold md:text-3xl ">
                      {item.name}
                    </h1>
                    {item.album && (
                      <p
                        className="truncate font-poppins text-white/50 md:text-2xl
                "
                      >
                        {item.album.name}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <h1 className="font-gotham text-2xl font-bold capitalize md:text-3xl ">
                  {item}
                </h1>
              )}
            </div>
          </li>
        ))}
      </ul>
      {!showAllItems ? (
        <button
          onClick={handleShowMore}
          className="w-full p-7 text-center font-gotham text-2xl font-bold text-green hover:brightness-50 md:p-10 md:text-3xl"
        >
          Ver mais
        </button>
      ) : (
        <button
          onClick={handleShowLess}
          className="w-full p-7 text-center font-gotham text-2xl font-bold text-green hover:brightness-50
          md:p-10 md:text-3xl"
        >
          Ver menos
        </button>
      )}
    </div>
  )
}
