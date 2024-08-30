import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Gestão Paroquial',
  description: 'Gestão dos encontros paroquiais',
}

type Props = { children: ReactNode }

export default function RootLayout(props: Props) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{props.children}</body>
    </html>
  )
}
