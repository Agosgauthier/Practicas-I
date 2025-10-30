import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { insertItem, updateItem } from '../db';

export default function FormScreen({ navigation, route }) {
  const item = route.params?.item;
  const [nombre, setNombre] = useState(item ? item.nombre : '');
  const [categoria, setCategoria] = useState(item ? item.categoria : '');
  const [descripcion, setDescripcion] = useState(item ? item.descripcion : '');

  const handleSave = () => {
    if (!nombre || !categoria || !descripcion) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (item) {
      updateItem(item.id, nombre, categoria, descripcion, () => navigation.goBack());
    } else {
      insertItem(nombre, categoria, descripcion, () => navigation.goBack());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <Button title={item ? 'Actualizar' : 'Guardar'} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
