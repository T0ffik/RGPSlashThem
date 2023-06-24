import {TextInput, ImageBackground, TextInputProps} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../static/consts/colors';

type TInputProps = TextInputProps & {
  additionalStyles?: any;
};

const backgroundImage = '../../../static/imgs/inputBackground.png';
export const Input = ({
  value,
  onChangeText,
  onBlur,
  additionalStyles,
  placeholder,
}: TInputProps) => {
  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={additionalStyles}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </ImageBackground>
  );
};
