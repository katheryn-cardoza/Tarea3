import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Colors } from './Colors';

const Dashboard = ({ name, age, email }) => {
  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  const name = 'Katheryn';
  const age = 20;
  const email = 'katheryn.cardoza@ujcv.edu.hn';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Dashboard name={name} age={age} email={email} /> {}
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
        color={Colors.PRIMARY_BLUE}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.PRIMARY_WHITE,
  },
  dashboardContainer: {
    width: '80%',
    backgroundColor: Colors.PRIMARY_WHITE,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  dashboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.DEFAULT_GREEN,
  },
});

export default ProfileScreen;