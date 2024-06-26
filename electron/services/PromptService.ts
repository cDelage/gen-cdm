import { Model } from "../types/Model.type";
import { Project } from "../types/Project.type";

const MODEL_SAMPLE: Model = {
  _id: "model_1",
  modelName: "LIBRARY",
  tables: [
    {
      _id: "table_1",
      name: "BOOK",
      fields: [
        { _id: "field_1", name: "BOOK_ID", type: "number", primaryKey: true },
        { _id: "field_2", name: "TITLE", type: "string", primaryKey: false },
        {
          _id: "field_3",
          name: "PUBLICATION_DATE",
          type: "date",
          primaryKey: false,
        },
        {
          _id: "field_4",
          name: "AUTHOR_ID",
          type: "number",
          primaryKey: false,
        },
        {
          _id: "field_17",
          name: "CATEGORY_ID",
          type: "number",
          primaryKey: false,
        },
        {
          _id: "field_18",
          name: "PUBLISHER_ID",
          type: "number",
          primaryKey: false,
        }
      ],
    },
    {
      _id: "table_2",
      name: "AUTHOR",
      fields: [
        { _id: "field_5", name: "AUTHOR_ID", type: "number", primaryKey: true },
        { _id: "field_6", name: "NAME", type: "string", primaryKey: false },
        {
          _id: "field_7",
          name: "DATE_OF_BIRTH",
          type: "date",
          primaryKey: false,
        },
      ],
    },
    {
      _id: "table_3",
      name: "MEMBER",
      fields: [
        { _id: "field_8", name: "MEMBER_ID", type: "number", primaryKey: true },
        { _id: "field_9", name: "NAME", type: "string", primaryKey: false },
        { _id: "field_10", name: "ADDRESS", type: "string", primaryKey: false },
        {
          _id: "field_11",
          name: "DATE_OF_MEMBERSHIP",
          type: "date",
          primaryKey: false,
        },
      ],
    },
    {
      _id: "table_4",
      name: "LOAN",
      fields: [
        { _id: "field_12", name: "LOAN_ID", type: "number", primaryKey: true },
        {
          _id: "field_13",
          name: "MEMBER_ID",
          type: "number",
          primaryKey: false,
        },
        { _id: "field_14", name: "BOOK_ID", type: "number", primaryKey: false },
        { _id: "field_15", name: "LOAN_DATE", type: "date", primaryKey: false },
        {
          _id: "field_16",
          name: "EXPECTED_RETURN_DATE",
          type: "date",
          primaryKey: false,
        },
        {
          _id: "field_19",
          name: "EMPLOYEE_ID",
          type: "number",
          primaryKey: false,
        }
      ],
    },
    {
      _id: "table_5",
      name: "CATEGORY",
      fields: [
        { _id: "field_20", name: "CATEGORY_ID", type: "number", primaryKey: true },
        { _id: "field_21", name: "CATEGORY_NAME", type: "string", primaryKey: false },
      ],
    },
    {
      _id: "table_6",
      name: "PUBLISHER",
      fields: [
        { _id: "field_22", name: "PUBLISHER_ID", type: "number", primaryKey: true },
        { _id: "field_23", name: "PUBLISHER_NAME", type: "string", primaryKey: false },
      ],
    },
    {
      _id: "table_7",
      name: "RESERVATION",
      fields: [
        { _id: "field_24", name: "RESERVATION_ID", type: "number", primaryKey: true },
        { _id: "field_25", name: "MEMBER_ID", type: "number", primaryKey: false },
        { _id: "field_26", name: "BOOK_ID", type: "number", primaryKey: false },
        { _id: "field_27", name: "RESERVATION_DATE", type: "date", primaryKey: false },
        { _id: "field_28", name: "STATUS", type: "string", primaryKey: false }
      ],
    },
    {
      _id: "table_8",
      name: "EMPLOYEE",
      fields: [
        { _id: "field_29", name: "EMPLOYEE_ID", type: "number", primaryKey: true },
        { _id: "field_30", name: "NAME", type: "string", primaryKey: false },
        { _id: "field_31", name: "POSITION", type: "string", primaryKey: false },
        { _id: "field_32", name: "HIRE_DATE", type: "date", primaryKey: false },
      ],
    }
  ],
  relations: [
    {
      _id: "relation_1",
      relationName: "BOOK_AUTHOR",
      childEntity: {
        tableId: "table_1",
        tableName: "BOOK",
        foreignKey: "AUTHOR_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
      parentEntity: {
        tableId: "table_2",
        tableName: "AUTHOR",
        primaryKey: "AUTHOR_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
    },
    {
      _id: "relation_2",
      relationName: "LOAN_MEMBER",
      childEntity: {
        tableId: "table_4",
        tableName: "LOAN",
        foreignKey: "MEMBER_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
      parentEntity: {
        tableId: "table_3",
        tableName: "MEMBER",
        primaryKey: "MEMBER_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
    },
    {
      _id: "relation_3",
      relationName: "LOAN_BOOK",
      childEntity: {
        tableId: "table_4",
        tableName: "LOAN",
        foreignKey: "BOOK_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
      parentEntity: {
        tableId: "table_1",
        tableName: "BOOK",
        primaryKey: "BOOK_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
    },
    {
      _id: "relation_4",
      relationName: "BOOK_CATEGORY",
      childEntity: {
        tableId: "table_1",
        tableName: "BOOK",
        foreignKey: "CATEGORY_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
      parentEntity: {
        tableId: "table_5",
        tableName: "CATEGORY",
        primaryKey: "CATEGORY_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
    },
    {
      _id: "relation_5",
      relationName: "BOOK_PUBLISHER",
      childEntity: {
        tableId: "table_1",
        tableName: "BOOK",
        foreignKey: "PUBLISHER_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
      parentEntity: {
        tableId: "table_6",
        tableName: "PUBLISHER",
        primaryKey: "PUBLISHER_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
    },
    {
      _id: "relation_6",
      relationName: "RESERVATION_MEMBER",
      childEntity: {
        tableId: "table_7",
        tableName: "RESERVATION",
        foreignKey: "MEMBER_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
      parentEntity: {
        tableId: "table_3",
        tableName: "MEMBER",
        primaryKey: "MEMBER_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
    },
    {
      _id: "relation_7",
      relationName: "RESERVATION_BOOK",
      childEntity: {
        tableId: "table_7",
        tableName: "RESERVATION",
        foreignKey: "BOOK_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
      parentEntity: {
        tableId: "table_1",
        tableName: "BOOK",
        primaryKey: "BOOK_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
    },
    {
      _id: "relation_8",
      relationName: "LOAN_EMPLOYEE",
      childEntity: {
        tableId: "table_4",
        tableName: "LOAN",
        foreignKey: "EMPLOYEE_ID",
        cardinalityMin: "1",
        cardinalityMax: "1",
      },
      parentEntity: {
        tableId: "table_8",
        tableName: "EMPLOYEE",
        primaryKey: "EMPLOYEE_ID",
        cardinalityMin: "0",
        cardinalityMax: "*",
      },
    }
  ],
};

export function runPrompt(prompt: string, _token: string): Project {
  return {
    name: "",
    prompt,
    model: MODEL_SAMPLE,
  };
}
