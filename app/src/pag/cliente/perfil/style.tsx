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

  label: {
    marginBottom: 6,
    marginTop: 12,
    fontWeight: '600',
    color: '#444',
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#a07e28',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

});

export default styles;