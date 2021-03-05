type AbstractRole = Role & { category: 'abstract'; abstract: true };
type WidgetRole = Role & { category: 'widget' };
type DocumentStructureRole = Role & { category: 'document structure' };
type LandmarkRole = Role & { category: 'landmark' };
type LiveRegionRole = Role & { category: 'live region' };
type WindowRole = Role & { category: 'window' };

type Role = {
  name: string;
  description: string;
  abstract: boolean;
  superclassRole: Role | null;
  subclassRoles: Array<Role>;
  requiredAttributes: Array<Attribute>;
  supportedAttributes: Array<Attribute>;
  inheritedAttributes: Array<Attribute>;
  prohibitedAttributes: Array<Attribute>;
  requiredOwnedElements: Array<Role>;
  requiredContextRole: Role | null;
  accessibleName: 'author' | 'content' | 'prohibited' | null;
  presentationalChildren?: boolean;
  implicitValues: Array<AttributeValue>;
};

type AttributeValue = {
  prop: Attribute;
  value: string;
};

type Attribute =
  | WidgetAttribute
  | LiveRegionAttribute
  | DragDropAttribute
  | RelationshipAttribute
  | MiscAttribute;

type WidgetAttribute =
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
  | 'aria-valuetext';

type LiveRegionAttribute =
  | 'aria-atomic'
  | 'aria-busy'
  | 'aria-live'
  | 'aria-relevant';

type DragDropAttribute = 'aria-dropeffect' | 'aria-grabbed';

type RelationshipAttribute =
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
  | 'aria-setsize';

type MiscAttribute =
  | 'aria-current'
  | 'aria-keyshortcuts'
  | 'aria-roledescription';

export {
  AbstractRole,
  WidgetRole,
  DocumentStructureRole,
  LandmarkRole,
  LiveRegionRole,
  WindowRole,
  Role,
  Attribute,
  WidgetAttribute,
  LiveRegionAttribute,
  DragDropAttribute,
  RelationshipAttribute,
  MiscAttribute,
};
