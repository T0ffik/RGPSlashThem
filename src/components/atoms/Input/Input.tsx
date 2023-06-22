import {TextInput, ImageBackground} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../static/consts/colors';

type TInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  additionalStyles?: any;
};

export const Input = ({
  value,
  onChange,
  onBlur,
  additionalStyles,
  placeholder,
}: TInputProps) => {
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
        onBlur={onBlur}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </ImageBackground>
  );
};
