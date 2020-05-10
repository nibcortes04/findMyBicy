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
  Dimensions,
} from 'react-native';

import {colors} from '../../colors';

const VerificationCode = ({}) => {
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
              <Text style={styles.text1}>CÓDIGO DE VERIFICACIÓN</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.infoText}>
              Se envió por correo a jj_cuenca@hotmail.com
            </Text>
            <Text style={styles.infoText}>y por whatsapp a +57 3016919762</Text>
            <TextInput
              style={styles.code}
              placeholder="Código de verificación"
              keyboardType={'numeric'}
              // onChangeText={}
              // value={}
            />

            <Text style={styles.sendCode}>¿No lo reciviste?</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} disabled={true}>
              <Text style={styles.buttonText}>VERIFICAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  infoText: {
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'center',
  },
  code: {
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    marginTop: Dimensions.get('window').height * 0.12,
    paddingLeft: 20,
  },
  sendCode: {
    paddingTop: 70,
    alignSelf: 'center',
  },
  button: {
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.07,
    borderWidth: 1,
    backgroundColor: colors.green,
  },
  buttonText: {
    fontSize: 22,
  },
  body: {
    marginTop: Dimensions.get('window').height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 73,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerificationCode;
