import React, {useEffect} from 'react';
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

import {colors} from '../../colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../records/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  logo: {
    width: 350,
    height: 400,
  },
});

export default Splash;
