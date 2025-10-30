import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { getItems, deleteItem } from '../db';
import ItemCard from '../components/ItemCard';

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);

  const loadItems = () => {
    getItems(setItems);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadItems);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = (id) => {
    Alert.alert('Confirmar', '¿Seguro que deseas eliminar este registro?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        onPress: () => {
          deleteItem(id, loadItems);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar nuevo" onPress={() => navigation.navigate('Formulario')} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard item={item} onEdit={() => navigation.navigate('Formulario', { item })} onDelete={handleDelete} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
});
