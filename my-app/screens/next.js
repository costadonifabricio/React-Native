import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";

const NextScreen = () => {
  const [lista, setLista] = useState([]);

  const obtenerLista = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=140&offset=0";
    const response = await fetch(url);
    const data = await response.json();

    setLista(data.results);
  };

  useEffect(() => {
    obtenerLista();
  }, []);

  const obtenerImagen = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  const MostrarPokemon = ({ item }) => {
    const id = item.url.split("/")[6];
    const imagenUrl = obtenerImagen(id);

    return (
      <TouchableOpacity style={styles.pokemonContainer}>
        <Image source={{ uri: imagenUrl }} style={styles.imagen} />
        <Text style={styles.nombre}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        renderItem={MostrarPokemon}
        keyExtractor={(item, index) => index.toString()}
        numColumns={10} // Reducir el número de columnas para evitar que las imágenes se salgan del contorno
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    alignItems: "center",
  },
  pokemonContainer: {
    alignItems: "center",
    margin: 5,
  },
  imagen: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  nombre: {
    fontSize: moderateScale(15),
    textAlign: "center",
    marginTop: 5,
  },
};

export default NextScreen;
