import { AbstractRole } from '../../types';

const Command: AbstractRole = {
  name: 'command',
  description:
    'A form of widget that performs an action but does not receive input data.',
  category: 'abstract',
  abstract: true,
  superclassRole: widgetRole,
  subclassRoles: [buttonRole, linkRole, menuItemRole],
  requiredAttributes: [],
  supportedAttributes: [],
  inheritedAttributes: [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
  ],
  prohibitedAttributes: [],
  requiredOwnedElements: [],
  requiredContextRole: null,
  accessibleName: 'author',
  implicitValues: [],
};

export default Command;
