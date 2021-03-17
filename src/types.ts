import AbstractRole from './roles/abstractRole'
import DocumentStructureRole from './roles/documentRole'
import LandmarkRole from './roles/landmarkRole'
import LiveRegionRole from './roles/liveRole'
import WidgetRole from './roles/widgetRole'
import WindowRole from './roles/windowRole'

export type Role =
  | AbstractRole
  | DocumentStructureRole
  | LandmarkRole
  | LiveRegionRole
  | WidgetRole
  | WindowRole

export type RoleArguments = {
  name: RoleName
  description: string
  accessibleName: Array<AccessibleNameFrom> | 'prohibited'
  superclassRoles: Array<RoleName>
  subclassRoles?: Array<RoleName>
  requiredAttributes?: Array<Attribute>
  supportedAttributes?: Array<Attribute>
  prohibitedAttributes?: Array<Attribute>
  requiredOwnedElements?: Array<RoleName | Array<RoleName>>
  requiredContextRoles?: Array<RoleName>
  nameRequired?: boolean
  presentationalChildren?: boolean
  deprecated?: boolean
  implicitValues?: Array<AttributeValue>
  relatedConcepts?: Array<Concept>
  baseConcepts?: Array<Concept>
}

export type Concept =
  | {
      subject: string
      specification: 'HTML' | undefined
    }
  | RoleName

export type RoleCategory =
  | 'abstract'
  | 'widget'
  | 'document structure'
  | 'landmark'
  | 'live region'
  | 'window'

export type AccessibleNameFrom = 'author' | 'contents'

export type AttributeValue = {
  attribute: Attribute
  value: string
}

export type Attribute =
  | WidgetAttribute
  | LiveRegionAttribute
  | DragDropAttribute
  | RelationshipAttribute
  | MiscAttribute

export type WidgetAttribute =
  | 'aria-autocomplete'
  | 'aria-checked'
  | 'aria-disabled'
  | 'aria-errormessage'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-label'
  | 'aria-level'
  | 'aria-modal'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-placeholder'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-required'
  | 'aria-selected'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext'

export type LiveRegionAttribute =
  | 'aria-atomic'
  | 'aria-busy'
  | 'aria-live'
  | 'aria-relevant'

export type DragDropAttribute = 'aria-dropeffect' | 'aria-grabbed'

export type RelationshipAttribute =
  | 'aria-activedescendant'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-describedby'
  | 'aria-details'
  | 'aria-errormessage'
  | 'aria-flowto'
  | 'aria-labelledby'
  | 'aria-owns'
  | 'aria-posinset'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowspan'
  | 'aria-setsize'

export type MiscAttribute =
  | 'aria-current'
  | 'aria-keyshortcuts'
  | 'aria-roledescription'

export type RoleName =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'blockquote'
  | 'button'
  | 'caption'
  | 'cell'
  | 'checkbox'
  | 'code'
  | 'columnheader'
  | 'combobox'
  | 'command'
  | 'complementary'
  | 'composite'
  | 'contentinfo'
  | 'definition'
  | 'deletion'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'emphasis'
  | 'feed'
  | 'figure'
  | 'form'
  | 'generic'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'input'
  | 'insertion'
  | 'landmark'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'meter'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'paragraph'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'range'
  | 'region'
  | 'roletype'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'section'
  | 'sectionhead'
  | 'select'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'strong'
  | 'structure'
  | 'subscript'
  | 'superscript'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'time'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | 'widget'
  | 'window'
