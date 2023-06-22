import {TextInput, ImageBackground} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../static/consts/colors';

type TInputProps = {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  additionalStyles?: any;
};

export const Input = ({value, onChange, additionalStyles, placeholder}: TInputProps) => {
  return (
    <ImageBackground
      source={require('../../../static/imgs/inputBackground.png')}
      resizeMode="cover"
      style={additionalStyles}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </ImageBackground>
  );
};
