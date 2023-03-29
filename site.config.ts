import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0890bde7480f4b9b970e5b2fced2d091',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'SVDE ',
  domain: 'https://wr8-5brxh9gu7-svde-b.vercel.app/',
  author: 'SVDE',
  seotitle: 'Demo site by SVDE for Notion',

  // open graph metadata (optional)
  description: 'Demo site by SVDE for Notion.',

  // social usernames (optional)
  twitter: 'svdeblk',
  github: 'svdeblk',
  linkedin: 'svdeblk',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [  
    {
      title: 'Blog',
      pageId: '588031c1e65d4dfa9d58e2492c9c1b7e'
    },    
    {
      title: 'About',
      pageId: 'cf2ae3c4839e4e09a1b4a33cc600c409'
    },
    {
      title: 'Contact',
      pageId: '5f7e562fef814299b10c68c52e920c9a'
    }
  ]
})
