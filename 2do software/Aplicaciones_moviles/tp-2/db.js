import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        categoria TEXT NOT NULL,
        descripcion TEXT NOT NULL
      );`
    );
  });
};

export const getItems = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM items', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

export const insertItem = (nombre, categoria, descripcion, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO items (nombre, categoria, descripcion) VALUES (?, ?, ?)',
      [nombre, categoria, descripcion],
      (_, result) => callback(result)
    );
  });
};

export const updateItem = (id, nombre, categoria, descripcion, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE items SET nombre = ?, categoria = ?, descripcion = ? WHERE id = ?',
      [nombre, categoria, descripcion, id],
      (_, result) => callback(result)
    );
  });
};

export const deleteItem = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM items WHERE id = ?', [id], (_, result) => {
      callback(result);
    });
  });
};

export default db;
