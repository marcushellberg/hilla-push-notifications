import { Route } from '@vaadin/router';
import './views/notifications/notifications-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'notifications-view',
    title: 'Notifications',
  },
];
