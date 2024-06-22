import { Model } from '../types/Model.type'
import { Project } from '../types/Project.type'

const MODEL_SAMPLE: Model = {
  tables: [
    {
      name: 'Members',
      fields: [
        { name: 'memberId', type: 'number', primaryKey: true, foreignKey: undefined },
        { name: 'name', type: 'string', primaryKey: false, foreignKey: undefined },
        { name: 'contactInfo', type: 'string', primaryKey: false, foreignKey: undefined },
        { name: 'membershipType', type: 'string', primaryKey: false, foreignKey: undefined }
      ]
    },
    {
      name: 'Instructors',
      fields: [
        { name: 'instructorId', type: 'number', primaryKey: true, foreignKey: undefined },
        { name: 'name', type: 'string', primaryKey: false, foreignKey: undefined },
        { name: 'contactInfo', type: 'string', primaryKey: false, foreignKey: undefined }
      ]
    },
    {
      name: 'SwimmingLessons',
      fields: [
        { name: 'lessonId', type: 'number', primaryKey: true, foreignKey: undefined },
        {
          name: 'instructorId',
          type: 'number',
          primaryKey: false,
          foreignKey: { table: 'Instructors', reference: 'instructorId' }
        },
        { name: 'timeSlot', type: 'string', primaryKey: false, foreignKey: undefined }
      ]
    },
    {
      name: 'RecreationalSwimming',
      fields: [
        { name: 'recSwimId', type: 'number', primaryKey: true, foreignKey: undefined },
        { name: 'timeSlot', type: 'string', primaryKey: false, foreignKey: undefined }
      ]
    },
    {
      name: 'PoolRentals',
      fields: [
        { name: 'rentalId', type: 'number', primaryKey: true, foreignKey: undefined },
        {
          name: 'memberId',
          type: 'number',
          primaryKey: false,
          foreignKey: { table: 'Members', reference: 'memberId' }
        },
        { name: 'rentalDate', type: 'date', primaryKey: false, foreignKey: undefined },
        { name: 'rentalTime', type: 'string', primaryKey: false, foreignKey: undefined },
        { name: 'specialRequirements', type: 'string', primaryKey: false, foreignKey: undefined }
      ]
    }
  ]
}


export function runPrompt(prompt: string, _token : string) : Project {
  return {
    name: "SWIMMING_POOLS",
    prompt,
    model: MODEL_SAMPLE
  }
}
