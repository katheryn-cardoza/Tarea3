import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Colors } from './Colors';

const HomeScreen = ({ navigation }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProductPress = (productId) => {
    console.log('Product pressed:', productId);
  };

  const handleDropdownPress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.PRIMARY_GREEN }]}>
      <Text style={styles.title}>¿Qué Deseas Ordenar?</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleProductPress(1)}>
          <Image
            source={{ uri: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.imageText}>Expresso</Text>
          <Text style={styles.imageText}>$19.99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleProductPress(2)}>
          <Image
            source={{ uri: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Mocha.jpg.webp?itok=koYhcK1K' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.imageText}>Chocolotes</Text>
          <Text style={styles.imageText}>$24.99</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownContainer}>
        <Button title="Mostrar Menú" onPress={handleDropdownPress} />
      </View>
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.dropdownText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.dropdownText}>Configuración</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SECONDARY_GREEN,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.PRIMARY_BLACK,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;