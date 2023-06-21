import {Pressable} from 'react-native';
import BackArrowIcon from '../../../static/icons/BackArrow.svg';
import {styles} from './styles';

type TBackArrowProps = {
  goBack: () => void;
};

export const BackArrow = ({goBack}: TBackArrowProps) => {
  return (
    <Pressable style={styles.back} onPress={goBack}>
      <BackArrowIcon width={21} height={37} />
    </Pressable>
  );
};
