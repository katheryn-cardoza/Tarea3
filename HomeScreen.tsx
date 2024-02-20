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
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué Deseas Ordenar?</Text>
      <View style={styles.imageContainer}>
        <ProductCard
          imageUrl='https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt'
          name='Expresso'
          price='$19.99'
          onPress={() => handleProductPress(1)}
        />
        <ProductCard
          imageUrl='https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Mocha.jpg.webp?itok=koYhcK1K'
          name='Chocolotes'
          price='$24.99'
          onPress={() => handleProductPress(2)}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <Button title="Mostrar Menú" onPress={handleDropdownPress} />
      </View>
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <DropdownItem text="Perfil" onPress={() => navigation.navigate('Profile')} />
          <DropdownItem text="Configuración" onPress={() => navigation.navigate('Settings')} />
        </View>
      )}
    </View>
  );
};

const ProductCard = ({ imageUrl, name, price, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.productCard}>
      <Image source={{ uri: imageUrl }} resizeMode="contain" style={styles.image} />
      <Text style={styles.imageText}>{name}</Text>
      <Text style={styles.imageText}>{price}</Text>
    </View>
  </TouchableOpacity>
);

const DropdownItem = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.dropdownText}>{text}</Text>
  </TouchableOpacity>
);

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
  productCard: {
    alignItems: 'center',
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
  dropdownContent: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: Colors.PRIMARY_WHITE,
    padding: 10,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
