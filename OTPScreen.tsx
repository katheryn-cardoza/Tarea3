import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { Colors } from './Colors';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');

  const handleContinuar = () => {

    if (otp.trim() === '') {
      Alert.alert('Error', 'Por favor, ingrese su código OTP.');
      return;
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Ingrese su código aquí:</Text>
      <TextInput
        placeholder="Código OTP"
        style={styles.input}
        placeholderTextColor={Colors.PRIMARY_GREY}
        value={otp}
        onChangeText={setOTP}
      />
      <Button
        title="Continuar"
        color={Colors.PRIMARY_GREEN}
        onPress={handleContinuar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  instructions: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.PRIMARY_WHITE,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: Colors.PRIMARY_GREY,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: Colors.PRIMARY_WHITE,
  },
});

export default OTPScreen;
