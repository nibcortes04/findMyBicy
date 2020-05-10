import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';

import {colors} from '../../colors';

const DetailsDevice = () => {
  const [resourcePath, setResourcePath] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  takePic = () => {
    // ImagePicker.showImagePicker({}, response => {
    //   console.log('uri = ', response.uri);
    //   console.log('name = ', response.fileName);
    //   console.log('type = ', response.type);
    //   setResourcePath({
    //     uri: response.uri,
    //     name: response.fileName,
    //     type: response.type,
    //   });
    // });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image
              style={styles.iconReturn}
              source={require('../records/return.png')}
            />
          </TouchableOpacity>
          <Image style={styles.imgModal} source={{uri: resourcePath.uri}} />
        </View>
      </Modal>
      <ScrollView
        style={{
          width: Dimensions.get('window').width,
          backgroundColor: colors.white,
        }}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.head}>
          <View style={styles.btn1}>
            <Text style={styles.text1}>NUEVO DISPOSITIVO</Text>
          </View>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.nameBicy}
            placeholder="Nombre bicicleta"
            keyboardType={'default'}
            // onChangeText={}
            // value={resourcePath}
          />
          <View style={styles.ContainerIconBicy}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Text style={styles.textBicy}>FOTO</Text>
                <Image
                  style={styles.iconBicy}
                  source={{uri: resourcePath.uri}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Text style={styles.textBicy}>FOTO</Text>
                <Image
                  style={styles.iconBicy}
                  source={{uri: resourcePath.uri}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Text style={styles.textBicy}>FOTO</Text>
                <Image
                  style={styles.iconBicy}
                  source={{uri: resourcePath.uri}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={takePic.bind(this)} style={styles.addFile}>
            <Text style={styles.addText}>Add bicy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePic.bind(this)} style={styles.addFile}>
            <Text style={styles.addText}>Add bicy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePic.bind(this)} style={styles.addFile}>
            <Text style={styles.addText}>Add factura</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} disabled={true}>
            <Text style={styles.buttonText}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textBicy: {
    position: 'absolute',
    top: 35,
    left: 28,
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
  iconReturn: {
    width: 30,
    height: 30,
    margin: 15,
  },
  infoText: {
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'center',
  },
  nameBicy: {
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    paddingLeft: 20,
  },
  facture: {
    backgroundColor: colors.grayOpacity,
    width: Dimensions.get('window').width * 0.8,
    marginTop: Dimensions.get('window').height * 0.05,
    paddingLeft: 20,
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
  addFile: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.07,
    backgroundColor: colors.grayOpacity,
  },
  buttonText: {
    fontSize: 22,
  },
  addText: {
    padding: 15,
    color: colors.grayPlaceholder,
  },
  body: {
    marginTop: Dimensions.get('window').height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBicy: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: colors.grayPlaceholder,
  },
  imgModal: {
    width: 300,
    height: 350,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height * 0.12,
  },
  ContainerIconBicy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Dimensions.get('window').height * 0.04,
    width: Dimensions.get('window').width * 0.8,
  },
});

export default DetailsDevice;
