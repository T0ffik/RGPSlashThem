import {TextInput, ImageBackground, Pressable} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';
import IconEyeOn from '../../../static/icons/IconEyeOn.svg';
import IconEyeOff from '../../../static/icons/IconEyeOff.svg';
import {colors} from '../../../static/consts/colors';

type TPasswordInputProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  additionalStyles?: any;
};

export const PasswordInput = ({
  value,
  onChange,
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
        placeholder={hidden ? '******' : 'Hasło'}
        value={value}
        onChangeText={onChange}
        secureTextEntry={hidden}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </ImageBackground>
  );
};
