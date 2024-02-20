import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from './Colors';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PRIMARY_GREEN}
        translucent
      />
      <Image
        source={{ uri: 'https://www.freepnglogos.com/uploads/starbucks-logo-png-picture-8.png' }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a Starbucks App</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Inicia Sesion Aquí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Ordena Aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_GREEN,
  },
  image: {
    width: 200,
    height: 200,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.PRIMARY_WHITE,
  },
  button: {
    backgroundColor: Colors.PRIMARY_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.PRIMARY_WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;