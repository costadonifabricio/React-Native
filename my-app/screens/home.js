import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigateToPokeAPI = () => {
    navigation.navigate("NextScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a tu PokeDex!</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToPokeAPI}>
        <Text style={styles.buttonText}>Ir a la PokeAPI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
