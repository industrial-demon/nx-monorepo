export interface Node {
  name: string
  value?: string
  link?: string
  children?: Node[]
}

export const TREE_DATA: Node[] = [
  {
    name: 'Directives',
    children: [
      { name: 'Attribute directives', link: 'attribute-directives' },
      { name: 'Structural directives', link: 'structural-directives' },
    ],
  },
  {
    name: 'Forms',
    children: [
      { name: 'Template Driven', link: 'template-driven-form' },
      { name: 'Reactive', link: 'reactive-form' },
      { name: 'Test', children: [{ name: 'Unit' }, { name: 'E2E' }] },
    ],
  },

  {
    name: 'Pipes',
    children: [{ name: 'Pipes', link: 'pipes' }],
  },
  {
    name: 'HTTP',
    children: [{ name: 'Http', link: 'http' }],
  },
  {
    name: 'Under construction',
    children: [],
  },
]
