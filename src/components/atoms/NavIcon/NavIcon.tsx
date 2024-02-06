import Wiki from 'Static/icons/WikiNav.svg';
import Calendar from 'Static/icons/CalendarNav.svg';
import Campain from 'Static/icons/CampainNav.svg';
import Cards from 'Static/icons/CardsNav.svg';
import Profile from 'Static/icons/ProfileNav.svg';
import {ROUTES} from 'Static/types/routeTypes';
import {colors} from 'Static/consts/colors';

type TNavIconProps = {
  routeName: string;
  isFocused: boolean;
};

export const NavIcon = ({routeName, isFocused}: TNavIconProps) => {
  const color = isFocused ? colors.accent : colors.main;
  switch (routeName) {
    case ROUTES.WIKI:
      return <Wiki fill={color} />;
    case ROUTES.CALENDAR:
      return <Calendar fill={color} />;
    case ROUTES.HOME:
      return <Campain fill={color} />;
    case ROUTES.CARDS:
      return <Cards fill={color} />;
    case ROUTES.PROFILE:
      return <Profile fill={color} />;
    default:
      return;
  }
};
