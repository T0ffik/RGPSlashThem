import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {MenuIcon, MenuItem} from 'Components/atoms';
import {styles} from './styles';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onPress = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <View style={styles.menuWrapper}>
      <MenuIcon onPress={onPress} clicked={isOpen} />
      {isOpen && (
        <>
          <MenuItem title="Dołącz" />
          <MenuItem title="Utwórz" />
          <MenuItem title="Edytuj" />
        </>
      )}
    </View>
  );
};
