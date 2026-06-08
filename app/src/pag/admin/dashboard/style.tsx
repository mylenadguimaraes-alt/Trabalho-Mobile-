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
    marginBottom: 25,
    color: '#2d2d2d',
  },

  card: {
    backgroundColor: '#fff',

    padding: 25,

    borderRadius: 20,

    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d2d2d',
  },

  cardNumber: {

    fontSize: 32,

    fontWeight: '700',

    color: '#a07e28',

    marginTop: 10,

  },

});

export default styles;