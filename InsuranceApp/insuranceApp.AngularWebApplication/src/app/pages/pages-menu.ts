import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  //{
  //  title: 'Dashboard',
  //  icon: 'nb-home',
  //  link: '/pages/dashboard',
  //  home: true,
  //},
    {
        title: 'Administrar',
        group: true,
    },
  {
    title: 'Clientes',
    icon: 'nb-person',
    link: '/pages/customers',
    home: true
  },
  {
      title: 'Polizas',
      icon: 'nb-home',
      link: '/pages/insurance'
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
