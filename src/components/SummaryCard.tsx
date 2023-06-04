interface SummaryCardProps {
  title: string
  description: string
}

export function SummaryCard({ title, description }: SummaryCardProps) {
  const descriptionLines = description.split('\n')

  return (
    <article>
      <h1 className=" mb-10 text-center font-gotham text-2xl font-bold text-white md:text-left md:text-5xl">
        {title}
      </h1>
      {descriptionLines.map((line, index) => (
        <>
          <p
            key={index}
            className="font-poppins font-medium text-white/50 md:text-xl "
          >
            {line}
          </p>
          <br />
        </>
      ))}
    </article>
  )
}
