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

const SwitchParkin = ({}) => {
  const [eChecked, setEChecked] = useState(false);

  return (
    <View style={styles.profileBicy}>
      <View>
        <Text style={styles.TextParkin}>
          {eChecked ? 'Parqueo Activado' : 'Parqueo Desactivado'}
        </Text>
        <Text style={styles.TextAlertParkin}>
          Alerta si sale de la zona de parqueo
        </Text>
      </View>
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
  TextParkin: {
    fontSize: 20,
  },
  TextAlertParkin: {
    fontSize: 12,
    color: colors.grayPlaceholder,
  },
  profileBicy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
});

export default SwitchParkin;
