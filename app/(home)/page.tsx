import Link from 'next/link'
import { Container } from '@/components/atomos/Container'

export default function Home() {
  console.log(process.cwd())

  return (
    <Container className={''}>
      <header className="flex justify-center">
        <h1 className="text-4xl">Sistema de Encontros Paroquiais</h1>
      </header>

      <section>
        <h2>Possível Dashboard</h2>

        <Link href="/configuracoes" className="text-blue-500">
          <span>Configurações</span>
        </Link>
      </section>
    </Container>
  )
}
