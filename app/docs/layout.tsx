import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import SolarUILogo from '../(home)/components/SolarUILogo'
import '../globals.css'
import '../sidebar.css'

const navbar = (
  <Navbar
    logo={
      <SolarUILogo/>
    }
  />
)

export default async function DocsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head
        color={{
          hue: { light: 24, dark: 24 },
          saturation: { light: 92, dark: 100 },
          lightness: { light: 50, dark: 62 },
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap('/docs')}
          docsRepositoryBase="https://github.com/your-org/solar-ui"
          footer={<></>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
