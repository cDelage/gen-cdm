export type Model = {
    tables: Table[]
}

export type Table = {
    name: string,
    fields: Field[]
}

export type Field = {
  name: string
  type: FieldType
  primaryKey: boolean
  foreignKey?: {
    table: string
    reference: string
  }

}

export type FieldType = 'string' | 'number' | 'date'
