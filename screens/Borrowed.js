import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { BookContext } from '../context/BookContext';

const Borrowed = () => {
  const { borrowedBooks, returnBook } = useContext(BookContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={borrowedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.name}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <Button title="Return Book" onPress={() => returnBook(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EBF4FA', 
  },
  bookItem: {
    padding: 16,
    backgroundColor: '#FFFFFF',  
    borderRadius: 12,
    marginBottom: 12,
    borderColor: '#DDEEEE',  
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333366',  
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555577', 
  },
  returnButton: {
    marginTop: 8,
    backgroundColor: '#CC3333', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  returnButtonText: {
    color: '#FFFFFF',  
    fontSize: 14,
    fontWeight: '500',
  },
});


export default Borrowed;
