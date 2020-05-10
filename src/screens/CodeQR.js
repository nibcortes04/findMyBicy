import React, {useState} from 'react';
import {
  StyleSheet,
  AppRegistry,
  View,
  Text,
  Linking,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

import {colors} from '../../colors';

const CodeQR = ({}) => {
  const [code, setCode] = useState('');

  onSuccess = e => {
    setCode(e.data);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        <ScrollView
          style={{
            width: Dimensions.get('window').width,
            backgroundColor: colors.white,
          }}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.head}>
            <View style={styles.btn1}>
              <Text style={styles.text1}>CÓDIGO QR</Text>
            </View>
          </View>
          <View style={styles.body}>
            {/* <QRCodeScanner
              style={styles.input}
              cameraStyle={styles.camQR}
              containerStyle={styles.ContainerCamQR}
              onRead={onSuccess}
              showMarker={true}
              markerStyle={styles.marcador}
            /> */}
            <TextInput
              value={code == '' ? null : code}
              style={styles.code}
              placeholder="IME"
              keyboardType={'numeric'}
              // onChangeText={}
              // value={}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  camQR: {
    marginTop: Dimensions.get('window').height * 0.1,
    width: 280,
    height: 150,
  },
  marcador: {
    borderColor: colors.green,
    width: 200,
  },
  ContainerCamQR: {
    marginTop: Dimensions.get('window').height * 0.08,
    width: 280,
    height: 300,
  },
  container: {
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
  text1: {
    padding: 15,
    fontSize: 19,
  },
  code: {
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    marginTop: Dimensions.get('window').height * 0.15,
    paddingLeft: 20,
  },

  body: {
    marginTop: Dimensions.get('window').height * 0.06,
    alignItems: 'center',
  },
});
export default CodeQR;
