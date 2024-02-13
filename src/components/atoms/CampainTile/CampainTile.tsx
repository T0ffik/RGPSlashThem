import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import {If} from '../If';

type TCampainTileProps = {};

export const CampainTile = ({}: TCampainTileProps) => {
  const isImage = false;
  const isGM = false;
  const dupa = require('../../../static/imgs/BackgroundImage.png');
  return (
    <Pressable style={styles.tileWrapper}>
      <Image
        source={dupa}
        style={styles.image}
        defaultSource={dupa}
        onError={e => console.log(e)}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>CampainTitle</Text>
        <Text style={styles.info}>CharacterName</Text>
        <Text style={styles.info}>02.08.2023</Text>
      </View>
      <If condition={isGM}>
        <Text style={styles.gmInfo}>GM</Text>
      </If>
    </Pressable>
  );
};
