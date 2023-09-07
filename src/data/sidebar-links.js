// links object for docs sidebar navigation and page routing with Gatsby

export const links = {
  //section heading and nested links
  getting_started: [
    {
      label: 'Introduction',
      link: '/docs/introduction',
    },
    {
      label: 'Installation',
      link: '/docs/installation',
    },
    // {
    //   label: "New User Tutorial",
    //   link: "/docs/new-user-tutorial",
    // },
  ],
  //section heading and nested links
  guides: [
    {
      label: 'Setup',
      link: '/docs/environment-setup',
    },
    {
      label: 'Creating New Components',
      link: '/docs/create-component',
    },
    {
      label: 'Component Relationships',
      link: '/docs/routes',
    },
    // {
    //   label: "Adding Styling",
    //   link: "/docs/component-styling",
    // },
    // {
    //   label: "OAuth Configuration",
    //   link: "/docs/oauthConfig",
    // },

    // {
    //   label: "Hierarchy Visualization",
    //   link: "/docs/hierarchy-visualization",
    // },
    {
      label: 'Saving, Importing, & Exporting',
      link: '/docs/save-and-export',
    },
  ],
};
