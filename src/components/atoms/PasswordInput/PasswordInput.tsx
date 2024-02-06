import {TextInput, ImageBackground, Pressable, TextInputProps} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';
import IconEyeOn from 'Static/icons/IconEyeOn.svg';
import IconEyeOff from 'Static/icons/IconEyeOff.svg';
import {colors} from 'Static/consts/colors';

type TPasswordInputProps = TextInputProps & {
  additionalStyles?: any;
};

export const PasswordInput = ({
  value,
  onChangeText,
  onBlur,
  additionalStyles,
}: TPasswordInputProps) => {
  const [hidden, setHidden] = useState(true);
  return (
    <ImageBackground
      source={require('../../../static/imgs/inputBackground.png')}
      resizeMode="cover"
      style={additionalStyles}
    >
      <Pressable onPress={() => setHidden(prev => !prev)} style={styles.icon}>
        {hidden ? <IconEyeOff /> : <IconEyeOn />}
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder={'******'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidden}
        placeholderTextColor={colors.inputPlaceholder}
        onBlur={onBlur}
      />
    </ImageBackground>
  );
};
