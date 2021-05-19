export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-primary'
  },
  {
    path: '/admin/aduan',
    title: 'Aduan',
    type: 'link',
    icontype: 'fas fa-flag text-primary'
  },
  {
    path: '/admin/maklum-balas',
    title: 'Pengurusan Maklum Balas',
    type: 'link',
    icontype: 'fas fa-comments text-primary'
  },
  // {
  //   path: '/admin/organisasi',
  //   title: 'Organisasi',
  //   type: 'link',
  //   icontype: 'fas fa-sitemap text-primary'
  // },
  {
    path: '/admin/log-harian',
    title: 'Log Harian',
    type: 'link',
    icontype: 'fas fa-sign-in-alt text-primary'
  },
  {
    path: '/admin/management',
    title: 'Pengurusan Sistem',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-primary',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Laluan Audit', type: 'link' },
      { path: 'user', title: 'Pengguna', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-primary'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];