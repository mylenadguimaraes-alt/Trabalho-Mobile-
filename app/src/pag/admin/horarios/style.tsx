import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#a07e28',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
  },

  nome: {
    fontWeight: '700',
    fontSize: 18,
  },

  deleteButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontWeight: '700',
  },

});

export default styles;