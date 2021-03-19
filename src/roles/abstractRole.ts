import BaseRole from './baseRole'
import { RoleArguments } from '../types'

export default class AbstractRole extends BaseRole {
  constructor(role: RoleArguments) {
    super(
      role.name,
      role.description,
      'abstract',
      role.superclassRoles,
      role.accessibleName,
      role.subclassRoles,
      role.requiredAttributes,
      role.supportedAttributes,
      role.prohibitedAttributes,
      role.requiredOwnedElements,
      role.requiredContextRoles,
      role.nameRequired,
      role.presentationalChildren,
      role.implicitValues,
      role.relatedConcepts,
      role.baseConcepts,
      role.deprecatedAttributes,
      role.deprecated
    )
  }
}
