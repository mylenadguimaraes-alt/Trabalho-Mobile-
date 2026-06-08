import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 20,

    marginBottom: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d2d2d',
  },

  info: {
    marginTop: 5,
    color: '#666',
  },

  button: {
    backgroundColor: '#d9534f',

    marginTop: 15,

    padding: 12,

    borderRadius: 12,

    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },

});

export default styles;