import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../globals.css'
import '../sidebar.css'

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700, fontSize: '1.1rem' }}>☀️ SolarUI</span>}
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © SolarUI.
  </Footer>
)

export default async function DocsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap('/docs')}
          docsRepositoryBase="https://github.com/your-org/solar-ui"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
