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
import DatePicker from 'react-native-datepicker';
import ModalSelector from 'react-native-modal-selector';

import {colors} from '../../colors';

const Register = ({navigation}) => {
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('+57');
  const countrys = [
    {
      key: 1,
      label: '+54',
      component: <Text style={styles.item}>(+54) Argentina</Text>,
    },
    {
      key: 2,
      label: '+55',
      component: <Text style={styles.item}>(+55) Brasil</Text>,
    },
    {
      key: 3,
      label: '+56',
      component: <Text style={styles.item}>(+56) Chile</Text>,
    },
    {
      key: 4,
      label: '+57',
      component: <Text style={styles.item}>(+57) Colombia</Text>,
    },
    {
      key: 5,
      label: '+58',
      component: <Text style={styles.item}>(+58) Venezuela</Text>,
    },
  ];
  const example = [{key: 5, label: 'Red Apples'}];

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
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => navigation.goBack()}>
              <Text style={styles.text1}>INICIO SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.text2}>REGISTRO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.input}
              placeholder="Nombres"
              keyboardType={'email-address'}
              textContentType={'name'}
              // onChangeText={}
              // value={}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellidos"
              keyboardType={'email-address'}
              // onChangeText={}
              // value={}
            />
            <DatePicker
              style={{
                width: Dimensions.get('window').width * 0.8,
              }}
              date={date}
              mode="date"
              placeholder="Fecha de nacimiento"
              format="YYYY/MM/DD"
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              showIcon={false}
              customStyles={{
                dateInput: {
                  height: Dimensions.get('window').width * 0.135,
                  marginTop: Dimensions.get('window').height * 0.07,
                  backgroundColor: colors.grayOpacity,
                  borderColor: colors.white,
                },
                dateText: {
                  paddingRight: 195,
                },
                placeholderText: {
                  paddingRight: 125,
                  color: colors.grayPlaceholder,
                },
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />

            <TextInput
              style={styles.email}
              placeholder="Correo Electrónico"
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              // onChangeText={}
              // value={}
            />
            <View style={styles.containerPhone}>
              <ModalSelector
                data={countrys}
                initValue={`${country} ▼`}
                cancelText={'Cancelar'}
                onChange={option => {
                  setCountry(option.label);
                }}
                selectStyle={styles.picker}
                initValueTextStyle={styles.item}
                cancelContainerStyle={{display: 'none'}}
                optionContainerStyle={{backgroundColor: colors.white}}
                keyboardShouldPersistTaps={'always'}
              />
              <TextInput
                style={styles.phone}
                keyboardType="numeric"
                maxLength={10}
                placeholder="Celular"
                textContentType={'emailAddress'}
                // onChangeText={}
                // value={}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              textContentType={'emailAddress'}
              // onChangeText={}
              // value={}
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} disabled={true}>
              <Text style={styles.buttonText}>REGISTRARME</Text>
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
    backgroundColor: colors.gray,
  },
  btn2: {
    alignItems: 'center',
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
  input: {
    marginTop: Dimensions.get('window').height * 0.03,
    backgroundColor: colors.grayOpacity,
    paddingLeft: 20,
    width: Dimensions.get('window').width * 0.8,
  },
  email: {
    marginTop: Dimensions.get('window').height * 0.07,
    backgroundColor: colors.grayOpacity,
    paddingLeft: 20,
    width: Dimensions.get('window').width * 0.8,
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
  containerPhone: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height * 0.03,
    alignItems: 'center',
  },
  phone: {
    width: Dimensions.get('window').width * 0.54,
    backgroundColor: colors.grayOpacity,
    paddingLeft: 20,
  },
  item: {
    fontSize: 17,
    color: colors.grayPlaceholder,
  },
  picker: {
    marginRight: 5,
    backgroundColor: colors.grayOpacity,
    borderColor: colors.grayOpacity,
    justifyContent: 'center',
    height: Dimensions.get('window').width * 0.14,
    width: Dimensions.get('window').width * 0.25,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: Dimensions.get('window').height * 0.025,
    alignItems: 'center',
  },
});

export default Register;
