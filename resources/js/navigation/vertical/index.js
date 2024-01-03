export default [
  {
    title: 'Main',
    to: { name: 'dashboards-admin' },
    icon: { icon: 'tabler-smart-home' },
    action: 'manage',
    subject: 'permission',
  },

  {
    title: 'Users',
    to: { name: 'users-list' },
    icon: { icon: 'tabler-users-group' },
    action: 'manage',
    subject: 'permission',
  },

  // supervisor menu

  {
    title: 'Main',
    to: { name: 'dashboards-supervisor' },
    icon: { icon: 'tabler-smart-home' },
    action: 'monitor',
    subject: 'own',
  },

  
  {
    title: 'Fleets',
    icon: { icon: 'tabler-device-desktop-analytics' },
    action: 'monitor',
    subject: 'own',
    children:[
      {
        title: 'Vehicles',
        to: { name: 'vehicles-main' },
        icon: { icon: 'tabler-bus' },
        action: 'monitor',
        subject: 'own',
      },
      {
        title: 'Robots',
        to: { name: 'robots-main' },
        icon: { icon: 'tabler-brand-discord' },
        action: 'monitor',
        subject: 'own',
      },

    ]

  },
  {
    title: 'Profile',
    to: { name: 'users-profile' },
    icon: { icon: 'tabler-user-star' },
    action: 'monitor',
    subject: 'own',
  },
]
