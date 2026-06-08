import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 25,
  },

  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 25,

    padding: 20,

    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  label: {
    color: '#888',
    marginTop: 10,
    fontSize: 13,
  },

  value: {
    color: '#2d2d2d',
    fontSize: 17,
    fontWeight: '600',
  },

  status: {
    color: '#2e8b57',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 5,
  },

  cancelButton: {
    marginTop: 20,

    backgroundColor: '#ffe5e5',

    paddingVertical: 14,

    borderRadius: 18,

    alignItems: 'center',
  },

  cancelText: {
    color: '#d9534f',
    fontWeight: '700',
  },

});

export default styles;