import { Block } from 'payload/types'

export const Page: Block = {    
    slug: 'projectsPage',
    fields: [
        {
            name: 'heroContent',
            label: 'Hero Section',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    label: 'Heading',
                    type: 'textarea',
                },
                {
                    name: 'subheading',
                    label: 'Subheading',
                    type: 'textarea'
                }
            ]
        }
    ]   
}
