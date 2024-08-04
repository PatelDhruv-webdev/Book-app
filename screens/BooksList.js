import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BookContext } from '../context/BookContext';

const BooksList = ({ navigation }) => {
  const { books, borrowBook } = useContext(BookContext);

  const handlePress = (book) => {
    navigation.navigate('BookDetail', { book });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.name}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <TouchableOpacity onPress={() => borrowBook(item)}>
              <Text style={{ color: 'blue', marginTop: 8 }}>Borrow</Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333366', 
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555577', 
  },
  borrowButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#CC3333', 
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  borrowButtonText: {
    color: '#FFFFFF',  
    fontSize: 14,
    fontWeight: '600',
  },
});


export default BooksList;
