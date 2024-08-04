import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BookContext } from '../context/BookContext';

const BookDetail = ({ route, navigation }) => {
  const { book } = route.params;
  const { borrowBook, borrowedBooks } = useContext(BookContext);

  const handleBorrow = () => {
    if (borrowedBooks.length >= 3) {
      alert('Maximum borrow limit reached. You can borrow up to 3 books at a time.');
    } else {
      borrowBook(book);
      alert('You have borrowed the book.');
      navigation.goBack(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bookTitle}>{book.name}</Text>
      <Text style={styles.bookAuthor}>Author: {book.author}</Text>
      <Text>Rating: {book.rating}</Text>
      <Text style={styles.bookSummary}>{book.summary}</Text>
      <Button title="Borrow Book" onPress={handleBorrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EBF4FA', 
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333366',  
    marginBottom: 10,
  },
  bookAuthor: {
    fontSize: 18,
    color: '#555577', 
    marginBottom: 8,
  },
  bookSummary: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444466', 
    marginTop: 8,
  },
  borrowButton: {
    marginTop: 12,
   backgroundColor: '#CC3333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',  
    fontSize: 16,
    fontWeight: '500',
  },
});


export default BookDetail;
