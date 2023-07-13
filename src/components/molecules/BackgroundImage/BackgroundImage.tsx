import {ImageBackground} from 'react-native';
import {styles} from './styles';
type TBackgroundImageProps = {
  children: any;
};
export const BackgroundImage = ({children}: TBackgroundImageProps) => {
  const source = require('../../../static/imgs/BackgroundImage.png');
  return (
    <ImageBackground source={source} resizeMode="contain" style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};
