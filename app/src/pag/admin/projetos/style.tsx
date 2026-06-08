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
    color: '#2d2d2d',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },

  imageButton: {

    backgroundColor: '#fff',

    padding: 15,

    borderRadius: 15,

    alignItems: 'center',

    marginBottom: 15,

    borderWidth: 1,

    borderColor: '#e5e5e5',

  },

  imageButtonText: {

    color: '#a07e28',

    fontWeight: '700',

    fontSize: 16,

  },

  preview: {

    width: '100%',

    height: 220,

    borderRadius: 20,

    marginBottom: 15,

    resizeMode: 'cover',

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
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff',

    padding: 20,

    borderRadius: 15,

    marginBottom: 12,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 4,

    elevation: 3,
  },

  nome: {
    fontWeight: '700',
    fontSize: 18,
    color: '#2d2d2d',
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