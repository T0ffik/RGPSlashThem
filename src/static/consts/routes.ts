import {ROUTES} from '../types/routeTypes';
import {Calendar, Cards, HomeView, Profile, Wiki} from 'Components/index';

export const tabRoutes = [
  {route: ROUTES.WIKI, component: Wiki},
  {route: ROUTES.CALENDAR, component: Calendar},
  {route: ROUTES.HOME, component: HomeView},
  {route: ROUTES.CARDS, component: Cards},
  {route: ROUTES.PROFILE, component: Profile},
];
