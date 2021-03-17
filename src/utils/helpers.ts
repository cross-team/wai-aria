import AllRoles from '../roles/_roles'
import { RoleName, Role } from '../types'

export const getRole = (name: RoleName): Role | Array<Role> => {
  let roles = AllRoles.filter((role) => role.name === name)
  if (roles.length === 1) {
    return roles[0]
  }
  return roles
}
