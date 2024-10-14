import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IChildren } from '@/types/components/IChildren'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Sistema de Encontros Paroquiais',
  description: 'Sistema de Encontros Paroquiais',
  authors: [
    { name: 'José Guilherme Costa Câmara' },
    { name: 'Severino Cavalho da Silva Neto' },
  ],
  keywords: [
    'Sistema',
    'Encontros',
    'Paroquiais',
    'Santo Afonso',
    'Santo Afonso Maria de Ligório',
  ],
}

export default function RootLayout(props: Readonly<IChildren>) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.className, 'h-screen w-screen bg-gray-100')}>
        {props.children}
      </body>
    </html>
  )
}
