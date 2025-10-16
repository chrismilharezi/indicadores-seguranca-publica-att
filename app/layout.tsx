import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Viviane - Especialista em Consórcios | Cursos e Treinamentos",
  description:
    "Aprenda com a maior especialista em consórcios do Brasil. Mais de 15 anos de experiência, 1.500+ profissionais formados e R$1.5Bi sob gestão. Cursos práticos e comprovados.",
  keywords:
    "consórcio, cursos de consórcio, especialista em consórcios, vender consórcio, contemplação de imóvel, Viviane Lopes, treinamento de vendas",
  authors: [{ name: "Viviane Lopes" }],
  creator: "Viviane Lopes",
  publisher: "Viviane Cursos",
  metadataBase: new URL("https://vivianecursos.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vivianecursos.com.br",
    title: "Viviane - Especialista em Consórcios",
    description: "Transforme sua carreira com os métodos comprovados da maior especialista em consórcios do Brasil.",
    siteName: "Viviane - Especialista em Consórcios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viviane - Especialista em Consórcios",
    description: "Transforme sua carreira com os métodos comprovados da maior especialista em consórcios do Brasil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
