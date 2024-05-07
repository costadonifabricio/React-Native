import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";

const HomeScreen = ({ navigation }) => {
  const navigateToPokeAPI = () => {
    navigation.navigate("NextScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: moderateScale(24) }]}>
        ¡Bienvenido a tu PokeDex!
      </Text>

      <TouchableOpacity
        style={[styles.button, { padding: moderateScale(10) }]}
        onPress={navigateToPokeAPI}
      >
        <Text style={[styles.buttonText, { fontSize: moderateScale(18) }]}>
          Ir a la PokeAPI
        </Text>
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
    marginBottom: moderateScale(20),
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default HomeScreen;
