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
  Switch,
} from 'react-native';

import {colors} from '../../colors';

const BicyDetails = ({}) => {
  const [eChecked, setEChecked] = useState(false);

  return (
    <View style={styles.profileBicy}>
      <Image
        style={styles.iconBicy}
        source={require('../records/bicicleta.jpg')}
      />
      <Text style={styles.TextNameBicy}>Scoot 740 2015</Text>
      <Switch
        value={eChecked}
        trackColor={{
          true: colors.darkblue,
          false: Platform.OS == 'android' ? '#d3d3d3' : '#fbfbfb',
        }}
        thumbColor={[
          Platform.OS == 'ios'
            ? '#FFFFFF'
            : eChecked
            ? colors.darkblue
            : '#ffffff',
        ]}
        ios_backgroundColor="#fbfbfb"
        onValueChange={() => {
          setEChecked(eChecked ? false : true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBicy: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  TextNameBicy: {
    fontSize: 20,
  },
  profileBicy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 10,
  },
});

export default BicyDetails;
