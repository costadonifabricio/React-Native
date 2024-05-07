import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

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
      <TouchableOpacity>
        <Image source={{ uri: imagenUrl }} style={styles.imagen} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        renderItem={MostrarPokemon}
        keyExtractor={(item, index) => index.toString()}
        numColumns={20}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 70,
    height: 70,
  },
};

export default NextScreen;
