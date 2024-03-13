import {View} from 'react-native';
import {useState} from 'react';
import {MenuIcon, MenuItem} from 'Components/atoms';
import {styles} from './styles';
import {If} from '../../atoms/If';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onPress = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <View style={styles.menuWrapper}>
      <MenuIcon onPress={onPress} clicked={isOpen} />
      <If condition={isOpen}>
        <>
          <MenuItem title="Dołącz" />
          <MenuItem title="Utwórz" />
          <MenuItem title="Edytuj" />
        </>
      </If>
    </View>
  );
};
