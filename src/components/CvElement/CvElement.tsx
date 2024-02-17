import Link from 'next/link'

const linkColor = '#ffac40'

function extractLinks(input: string): (string | [string, string])[] {
  const regex = /\[(.*?)\]\((.*?)\)/g
  const matches = [...input.matchAll(regex)]

  const result: (string | [string, string])[] = []
  let lastIndex: number | undefined = 0

  for (const match of matches) {
    const [fullMatch, linkText, linkUrl] = match
    const precedingText = input.slice(lastIndex, match.index)

    if (precedingText) {
      result.push(precedingText.trim())
    }
    result.push([linkText.trim(), linkUrl])

    lastIndex = (match.index ?? 0) + fullMatch.length
  }

  const remainingText = input.slice(lastIndex)
  if (remainingText) {
    result.push(remainingText.trim())
  }

  return result
}

/**
 * Supports links in markdown format
 */
export default function CvElement({
  mdText,
  mdDetail,
  ongoingSince
}: {
  mdText: string
  mdDetail?: string
  ongoingSince?: Date
}) {
  const parts = []

  let durationStr = ''
  if (ongoingSince) {
    const currentDate = new Date()
    const durationMonths =
      (currentDate.getFullYear() - ongoingSince.getFullYear()) * 12 +
      (currentDate.getMonth() + 1 - ongoingSince.getMonth()) +
      1 +
      (currentDate.getDate() < ongoingSince.getDate() ? -1 : 0)
    const durationYears = Math.floor(durationMonths / 12)
    const yearsStr = durationYears > 0 ? `${durationYears} year${durationYears > 1 ? 's' : ''}` : ''
    durationStr = ` ${yearsStr} ${durationMonths % 12} month${durationMonths % 12 > 1 ? 's' : ''}`
  }

  const compositeMarkdown = mdText + (mdDetail ? ' | ' + mdDetail : '') + durationStr

  for (const part of extractLinks(compositeMarkdown)) {
    if (parts.length > 0) {
      parts.push(<span>&nbsp;</span>)
    }
    if (typeof part === 'string') {
      parts.push(<span>{part}</span>)
    } else {
      const [linkText, linkUrl] = part
      parts.push(
        <Link href={linkUrl} style={{ color: linkColor }}>
          {linkText}
        </Link>
      )
    }
  }
  return <p className="mt-2 font-bold text-sm xs:text-base">{parts}</p>
}
