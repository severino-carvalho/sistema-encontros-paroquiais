export interface IGenericoService<S, R> {
  findAll(): Promise<R[]>

  save(data: S): Promise<R>

  update(id: string, data: S): Promise<R>

  delete(id: string): Promise<R>
}
