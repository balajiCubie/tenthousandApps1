export default {
  name: 'others',
  type: 'document',
  title: 'others',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'TypeOfCalculator',
      name: 'typCal',
      type: 'string',
      description: 'Make related calculator',
    },
    {
      title: 'Image URL',
      name: 'img',
      type: 'url',
    },
    {
      title: 'Iframe URL',
      name: 'iframe',
      type: 'url',
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Reference 1',
      name: 'reference1',
      type: 'reference',
      to: [{type: 'others'}]
    },
    {
      title: 'Reference 2',
      name: 'reference2',
      type: 'reference',
      to: [{type: 'others'}]
    },
    {
      title: 'Reference 3',
      name: 'reference3',
      type: 'reference',
      to: [{type: 'others'}]
    },
    {
      title: 'Reference 4',
      name: 'reference4',
      type: 'reference',
      to: [{type: 'others'}]
    },
    {
      title: 'Reference 5',
      name: 'reference5',
      type: 'reference',
      to: [{type: 'others'}]
    },
    {
      title: 'Reference 6',
      name: 'reference6',
      type: 'reference',
      to: [{type: 'others'}]
    }
  ],
}
