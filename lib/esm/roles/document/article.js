import DocumentStructureRole from '../documentRole';
const articleRole = new DocumentStructureRole({
    name: 'article',
    description: 'A section of a page that consists of a composition that forms an independent part of a document, page, or site.',
    superclassRoles: ['document'],
    relatedConcepts: [
        {
            subject: '<article>',
            specification: 'HTML',
        },
    ],
    supportedAttributes: ['aria-posinset', 'aria-setsize'],
    accessibleName: ['author'],
});
export default articleRole;
