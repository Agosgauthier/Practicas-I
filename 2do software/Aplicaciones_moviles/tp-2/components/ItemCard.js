import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.nombre}</Text>
      <Text>Categoría: {item.categoria}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <View style={styles.buttons}>
        <Button title="Editar" onPress={onEdit} />
        <Button title="Eliminar" color="red" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
  },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});
