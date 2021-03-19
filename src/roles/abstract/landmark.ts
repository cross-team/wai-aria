import AbstractRole from '../abstractRole'
import bannerRole from '../landmark/banner'
import complementaryRole from '../landmark/complementary'
import contentinfoRole from '../landmark/contentinfo'
import formRole from '../landmark/form'
import mainRole from '../landmark/main'
import navigationRole from '../landmark/navigation'
import regionRole from '../landmark/region'
import searchRole from '../landmark/search'
import sectionRole from './section'

const landmarkRole: AbstractRole = new AbstractRole({
  name: 'landmark',
  description:
    'A perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.',
  superclassRoles: [sectionRole],
  subclassRoles: [
    bannerRole,
    complementaryRole,
    contentinfoRole,
    formRole,
    mainRole,
    navigationRole,
    regionRole,
    searchRole,
  ],
  accessibleName: ['author'],
  nameRequired: false,
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default landmarkRole
