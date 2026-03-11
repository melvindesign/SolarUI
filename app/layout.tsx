import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'SolarUI',
    template: '%s – SolarUI'
  },
  description: 'A modern UI component library built with React, Tailwind CSS and shadcn/ui'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
