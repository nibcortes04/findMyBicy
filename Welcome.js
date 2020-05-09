import React from 'react';
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
} from 'react-native';

import {colors} from './colors';

const Welcome = ({}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={require('../records/logo.png')}></Image> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkblue,
  },
  logo: {
    width: 350,
    height: 400,
  },
});

export default Welcome;
