interface SummaryCardProps {
  title: string
  description: string
}

export function SummaryCard({ title, description }: SummaryCardProps) {
  const descriptionLines = description.split('\n')

  return (
    <article>
      <h1 className="mb-10 font-gotham text-5xl font-bold text-white">
        {title}
      </h1>
      {descriptionLines.map((line, index) => (
        <>
          <p
            key={index}
            className="font-poppins text-xl font-medium text-white/50 "
          >
            {line}
          </p>
          <br />
        </>
      ))}
    </article>
  )
}
