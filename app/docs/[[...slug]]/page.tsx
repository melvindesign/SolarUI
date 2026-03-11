import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from 'nextra-theme-docs'

export const generateStaticParams = generateStaticParamsFor('slug')

const { wrapper: Wrapper } = useMDXComponents({})

type PageProps = Readonly<{
  params: Promise<{ slug?: string[] }>
}>

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.slug)
  return metadata
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const result = await importPage(params.slug)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </Wrapper>
  )
}
