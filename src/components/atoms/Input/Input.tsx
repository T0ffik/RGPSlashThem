import {TextInput, ImageBackground} from 'react-native';
import {styles} from './styles';

type TInputProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({value, onChange}: TInputProps) => {
  return (
    <ImageBackground
      source={require('../../../static/imgs/inputBackground.png')}
      resizeMode="cover"
      style={{zIndex: 20}}
    >
      <TextInput
        style={styles.input}
        placeholder={'Login'}
        value={value}
        onChangeText={onChange}
      />
    </ImageBackground>
  );
};
