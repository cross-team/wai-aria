import AbstractRole from '../abstractRole'

const sectionRole = new AbstractRole({
  name: 'section',
  description:
    'A renderable structural containment unit in a document or application.',
  superclassRoles: ['structure'],
  subclassRoles: [
    'alert',
    'blockquote',
    'caption',
    'cell',
    'code',
    'definition',
    'deletion',
    'emphasis',
    'figure',
    'group',
    'img',
    'insertion',
    'landmark',
    'list',
    'listitem',
    'log',
    'marquee',
    'math',
    'note',
    'paragraph',
    'status',
    'strong',
    'subscript',
    'superscript',
    'table',
    'tabpanel',
    'term',
    'time',
    'tooltip',
  ],
  accessibleName: [],
})

export default sectionRole
