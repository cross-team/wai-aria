import { Role } from '../types';
import widgetRole from './abstract/widget';

const baseRole: Role = {
  name: 'roletype',
  description: 'The base role from which all other roles inherit.',
  abstract: true,
  superclassRole: null,
  subclassRoles: [structureRole, widgetRole, windowRole],
  requiredAttributes: [],
  supportedAttributes: [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ],
  inheritedAttributes: [],
  prohibitedAttributes: [],
  requiredOwnedElements: [],
  requiredContextRole: null,
  accessibleName: null,
  implicitValues: [],
};

export default baseRole;
