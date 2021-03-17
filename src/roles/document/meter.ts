import DocumentStructureRole from '../documentRole'

const meterRole = new DocumentStructureRole({
  name: 'meter',
  description:
    'An element that represents a scalar measurement within a known range, or a fractional value.',
  superclassRoles: ['range'],
  relatedConcepts: [
    {
      subject: '<meter>',
      specification: 'HTML',
    },
  ],
  requiredAttributes: ['aria-valuenow'],
  accessibleName: ['author'],
  presentationalChildren: true,
  nameRequired: true,
  implicitValues: [
    {
      attribute: 'aria-valuemin',
      value: '0',
    },
    {
      attribute: 'aria-valuemax',
      value: '100',
    },
  ],
})

export default meterRole
