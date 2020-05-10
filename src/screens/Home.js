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
import BicyDetails from '../components/BicyDetails';

const Home = ({}) => {
  const [eChecked, setEChecked] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.btn1}>
            <Text style={styles.text1}>DISPOSITIVOS</Text>
          </View>
          <View style={styles.btn2}>
            <Image
              style={styles.iconProfile}
              source={require('../records/profile.png')}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.ViewParking}>
            <Text style={styles.TextParking}>Parqueo</Text>
          </View>
          <BicyDetails />
          <BicyDetails />
        </View>
        <View style={styles.footer}>
          <Image
            style={styles.iconAdd}
            source={require('../records/add.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  head: {
    flexDirection: 'row',
  },
  btn1: {
    flex: 1,
    alignItems: 'center',
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.gray,
  },
  text1: {
    fontFamily: 'Myriad Pro',
    padding: 15,
    fontSize: 19,
  },
  text2: {
    fontFamily: 'Myriad Pro',
    padding: 15,
    fontSize: 20,
  },
  iconProfile: {
    width: 50,
    height: 50,
  },
  iconAdd: {
    width: 50,
    height: 50,
  },
  ViewParking: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  TextParking: {
    color: colors.grayPlaceholder,
  },
  body: {
    flex: 5,
    width: Dimensions.get('window').width * 0.8,
  },
  footer: {
    flex: 1,
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'flex-end',
  },
});

export default Home;
