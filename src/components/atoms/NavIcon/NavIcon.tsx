import {View, Text} from 'react-native';
import Wiki from '../../../static/icons/WikiNav.svg';
import Calendar from '../../../static/icons/CalendarNav.svg';
import Campain from '../../../static/icons/CampainNav.svg';
import Cards from '../../../static/icons/CardsNav.svg';
import Profile from '../../../static/icons/ProfileNav.svg';
import {ROUTES} from '../../../static/types/routeTypes';
import {colors} from '../../../static/consts/colors';

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
