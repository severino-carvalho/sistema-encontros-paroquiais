'use client'

import { useState } from 'react'
import { EncontroResDto } from '@/types/dtos/services/encontro'
import { encontroService } from '@/services/EncontroService'
import { useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '@/types/enums/QueryKeyEnum'
import { Table, TablePaginationConfig } from 'antd'
import { RotasEnum } from '@/types/enums/RotasEnum'
import Link from 'next/link'

export function ListagemEncontro() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  async function fetchListagemEncontros() {
    setIsLoading(true)

    try {
      return await encontroService.findAll()
    } catch (error) {
      return { dados: [], total: 0 }
    } finally {
      setIsLoading(false)
    }
  }

  const { data } = useQuery({
    queryKey: [QueryKeyEnum.GET_ENCONTROS],
    queryFn: fetchListagemEncontros,
  })

  if (!data) return null

  function transformarEncontrosParaTabela(
    encontros: EncontroResDto[],
  ): EncontroResDto[] {
    if (!encontros) return []

    return encontros.map((encontro) => ({
      id: encontro.id,
      nome: encontro.nome,
      pastas: encontro.pastas,
    }))
  }

  const colunasTable = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome_encontro' },
  ]

  const paginationOptions: TablePaginationConfig = {
    position: ['bottomCenter'],
    current: currentPage,
    total: data.total,
    onChange: (page) => setCurrentPage(page),
  }

  return (
    <section className={'flex flex-col gap-2.5'}>
      <Link
        className={'inline w-min'}
        href={RotasEnum.CONFIGURACOES_ENCONTRO_MANUTENCAO}
      >
        Adicionar
      </Link>

      <Table<EncontroResDto>
        dataSource={transformarEncontrosParaTabela(data.dados)}
        columns={colunasTable}
        loading={isLoading}
        pagination={paginationOptions}
      />
    </section>
  )
}
