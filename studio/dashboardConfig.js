export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d702fa7e8f19d3c2ca099bc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-amz9yohk',
                  apiId: 'b61c3c8f-ca90-472a-a784-20b250de0ed9'
                },
                {
                  buildHookId: '5d702fa88da81465c6ae3eb0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6r8rvpsd',
                  apiId: 'e954b431-c1bf-4d0d-8727-0e9190f210b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ras2145/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6r8rvpsd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
