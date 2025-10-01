import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Imagen de la película */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />

      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.info}>Fecha de estreno: {movie.release_date}</Text>
      <Text style={styles.info}>Duración: {movie.runtime} min</Text>
      <Text style={styles.info}>Puntaje: {movie.vote_average} / 10</Text>
      <Text style={styles.info}>Idioma original: {movie.original_language}</Text>

      <Text style={styles.desc}>{movie.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  poster: { width: "100%", height: 400, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  info: { fontSize: 16, marginBottom: 5 },
  desc: { fontSize: 15, marginTop: 15, color: "#333", lineHeight: 20 },
});