export type Model = {
  _id?:string;
  modelName: string;
  tables: Table[];
  relations: Relation[];
};

export type Table = {
  _id?: string;
  name: string;
  fields: Field[];
  posX?: number;
  posY?: number;
};

export type Field = {
  _id?: string;
  name: string;
  type: FieldType;
  primaryKey: boolean;
};

export type Relation = {
  _id?: string;
  relationName: string;
  childEntity: {
    tableId?: string;
    tableName: string;
    foreignKey: string;
    cardinalityMin: Cardinality;
    cardinalityMax: Cardinality;
  };
  parentEntity: {
    tableId?: string;
    tableName: string;
    primaryKey: string;
    cardinalityMin: Cardinality;
    cardinalityMax: Cardinality;
  };
};

export type FieldType = "string" | "number" | "date";

export type Cardinality = "0" | "1" | "*" | undefined;