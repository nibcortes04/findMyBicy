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
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {colors} from '../../colors';
import SwitchParkin from '../components/SwitchParkin';
import IconsDetailsBicy from '../components/IconsDetailsBicy';

const DetailsBicy = ({}) => {
  const [eChecked, setEChecked] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.btn2}>
            <Image
              style={styles.iconProfile}
              source={require('../records/return.png')}
            />
          </View>
          <View style={styles.btn1}>
            <Text style={styles.text1}>LA MONTAÑERA</Text>
          </View>
          <View style={styles.btn2}>
            <Image
              style={styles.iconProfile}
              source={require('../records/edit.png')}
            />
          </View>
        </View>
        <View style={styles.body}>
          {/* <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 2.95772,
              longitude: -75.285801,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            // showsUserLocation={true}
          >
            <Marker
              coordinate={{
                latitude: 2.95772,
                longitude: -75.285801,
              }}>
              <Image
                source={require('../records/location.png')}
                style={{height: 40, width: 40, resizeMode: 'contain'}}
              />
            </Marker>
          </MapView> */}
        </View>
        <View style={styles.footer}>
          <IconsDetailsBicy />
          <SwitchParkin />
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
    flex: 3,
    alignItems: 'center',
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    width: 30,
    height: 30,
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
    width: Dimensions.get('window').width * 0.9,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default DetailsBicy;
