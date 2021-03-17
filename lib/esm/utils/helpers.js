import AllRoles from '../roles/_roles';
export const getRole = (name) => {
    let roles = AllRoles.filter((role) => role.name === name);
    if (roles.length === 1) {
        return roles[0];
    }
    return roles;
};
