import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {colors} from '../../colors';

const IconsDetailsBicy = ({}) => {
  const [eChecked, setEChecked] = useState(false);

  return (
    <View style={styles.profileIcons}>
      <Image style={styles.icons} source={require('../records/gps_off.png')} />
      <Image style={styles.icons} source={require('../records/gsm_1.png')} />
      <Image
        style={styles.icons}
        source={require('../records/battery_1.png')}
      />
      <Image style={styles.icons} source={require('../records/height.png')} />
      <Image
        style={styles.icons}
        source={require('../records/bluetooth_off.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 40,
    height: 25,
    resizeMode: 'stretch',
  },
  profileIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
});

export default IconsDetailsBicy;
