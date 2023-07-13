import {View, Text, Image, Pressable, PressableProps} from 'react-native';
import {styles} from './styles';

type TCampainTileProps = {};

export const CampainTile = ({}: TCampainTileProps) => {
  const isImage = false;
  const isGM = false;
  const dupa = require('../../../static/imgs/BackgroundImage.png');
  return (
    <Pressable style={styles.tileWrapper}>
      {isImage ? (
        <Image source={dupa} style={styles.image} onError={e => console.log(e)} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>CampainTitle</Text>
        <Text style={styles.info}>CharacterName</Text>
        <Text style={styles.info}>02.08.2023</Text>
      </View>
      {isGM && <Text style={styles.gmInfo}>GM</Text>}
    </Pressable>
  );
};
