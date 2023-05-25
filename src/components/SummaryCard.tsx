interface SummaryCardProps {
  title: string
  description: string
}

export function SummaryCard({ title, description }: SummaryCardProps) {
  const descriptionLines = description.split('\n')

  return (
    <article>
      <h1 className="text-white font-gotham font-bold text-5xl mb-10">
        {title}
      </h1>
      {descriptionLines.map((line, index) => (
        <>
          <p
            key={index}
            className="text-white/50 font-poppins font-medium text-xl "
          >
            {line}
          </p>
          <br />
        </>
      ))}
    </article>
  )
}
