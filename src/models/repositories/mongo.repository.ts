export type IRepository<T, ID> = {
  create(data: Omit<T, "id">): Promise<T>,
  deleteById(id: ID): Promise<void>,
  updateById(id: ID, data: T): Promise<void>,
  findByCriteria(criteria: Record<string, string>): Promise<T>,
  findAll(): Promise<T[]>,
  deleteAll(): Promise<void>,
}
