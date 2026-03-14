export interface ParsedMdx {
  title: string
  description: string
  prose: string
  codeBlocks: string[]
  apiTables: string[]
}

const SKIP_TAGS = ['ComponentPreview', 'ComponentPreviewRow', 'DoAndDont', 'Do', 'Dont', 'Callout']

export function parseMdx(content: string): ParsedMdx {
  const lines = content.split('\n')
  let title = ''
  let description = ''
  const proseLines: string[] = []
  const codeBlocks: string[] = []
  const apiTables: string[] = []

  let i = 0
  if (lines[0]?.trim() === '---') {
    i = 1
    while (i < lines.length && lines[i]?.trim() !== '---') {
      const line = lines[i]
      if (line) {
        const match = line.match(/^(\w+):\s*(.+)$/)
        if (match) {
          if (match[1] === 'title') title = match[2].trim().replace(/^['"]|['"]$/g, '')
          if (match[1] === 'description') description = match[2].trim().replace(/^['"]|['"]$/g, '')
        }
      }
      i++
    }
    i++
  }

  let inCodeBlock = false
  let currentCode: string[] = []
  let inTableBlock = false
  let currentTable: string[] = []
  let skipDepth = 0

  for (; i < lines.length; i++) {
    const line = lines[i] ?? ''

    if (!inCodeBlock && line.match(/^```/)) {
      inCodeBlock = true
      currentCode = [line]
      continue
    }
    if (inCodeBlock) {
      currentCode.push(line)
      if (line.match(/^```\s*$/)) {
        inCodeBlock = false
        codeBlocks.push(currentCode.join('\n'))
        currentCode = []
      }
      continue
    }

    if (line.match(/^import\s+/)) continue
    if (line.match(/^#\s+/)) continue

    const openingTag = line.match(/^<(\w+)/)
    if (openingTag) {
      const tagName = openingTag[1] ?? ''
      if (SKIP_TAGS.some(t => tagName.startsWith(t))) {
        if (line.includes('/>') || line.match(/<\/\w+>/)) continue
        skipDepth++
        continue
      }
      if (tagName === 'Tabs' || tagName === 'Tabs.Tab') continue
    }

    const closingTag = line.match(/^<\/(\w+)/)
    if (closingTag) {
      const tagName = closingTag[1] ?? ''
      if (SKIP_TAGS.some(t => tagName.startsWith(t))) {
        if (skipDepth > 0) skipDepth--
        continue
      }
      if (tagName === 'Tabs' || tagName === 'Tabs.Tab') continue
    }

    if (skipDepth > 0) continue

    if (line.startsWith('|')) {
      if (!inTableBlock) { inTableBlock = true; currentTable = [] }
      currentTable.push(line)
      continue
    } else if (inTableBlock) {
      apiTables.push(currentTable.join('\n'))
      currentTable = []
      inTableBlock = false
    }

    proseLines.push(line.trim() !== '' ? line : '')
  }

  if (currentTable.length > 0) apiTables.push(currentTable.join('\n'))

  const prose = proseLines.join('\n').replace(/\n{3,}/g, '\n\n').trim()
  return { title, description, prose, codeBlocks, apiTables }
}
