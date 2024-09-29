import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col">
      <header className="flex flex-1 justify-center">
        <h1 className="text-4xl">Gestão Paroquial</h1>
      </header>

      <section>
        <h2>Possível Dashboard</h2>

        <Link href="/configuracoes" className="text-blue-500">
          <span>Configurações</span>
        </Link>
      </section>
    </main>
  )
}
