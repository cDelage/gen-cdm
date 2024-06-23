export type Model = {
  tables: Table[];
};

export type Table = {
  _id?: string;
  name: string;
  fields: Field[];
};

export type Field = {
  _id?: string;
  name: string;
  type: FieldType;
  primaryKey: boolean;
  foreignKey?: {
    table: string;
    reference: string;
  };
};

export type FieldType = "string" | "number" | "date";
