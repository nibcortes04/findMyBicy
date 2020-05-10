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

const Login = ({navigation}) => {
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
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.text1}>INICIO SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text2}>REGISTRO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.email}
              placeholder="Correo Electrónico"
              keyboardType={'email-address'}
              // onChangeText={}
              // value={}
            />
            <TextInput
              style={styles.password}
              placeholder="Contraseña"
              secureTextEntry={true}
              // onChangeText={}
              // value={}
            />
            <Text style={styles.recoverPasswor}>¿Olvidaste tu contraseña?</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} disabled={true}>
              <Text style={styles.buttonText}>ACCEDER</Text>
            </TouchableOpacity>
            <View style={styles.containerIcon}>
              <View>
                <Image
                  style={styles.icon}
                  source={require('../records/facebook.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.icon}
                  source={require('../records/google.png')}
                />
              </View>
            </View>
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
  btn2: {
    alignItems: 'center',
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
  email: {
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    paddingLeft: 20,
  },
  password: {
    marginTop: 30,
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    paddingLeft: 20,
  },
  recoverPasswor: {
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
  containerIcon: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    borderTopWidth: 2,
    borderColor: colors.gray,
  },
  icon: {
    marginTop: 15,
    margin: 10,
    width: Dimensions.get('window').width * 0.17,
    height: Dimensions.get('window').height * 0.09,
  },
  body: {
    marginTop: Dimensions.get('window').height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: Dimensions.get('window').height * 0.1159,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
