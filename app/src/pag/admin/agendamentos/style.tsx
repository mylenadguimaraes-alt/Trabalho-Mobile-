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
    color: '#2d2d2d',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
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

  label: {
    color: '#888',
    marginTop: 10,
    fontSize: 12,
  },

  value: {
    color: '#2d2d2d',
    fontSize: 16,
    fontWeight: '600',
  },

  status: {
    color: '#2e8b57',
    fontWeight: '700',
    marginTop: 5,
  },

  actions: {
    flexDirection: 'row',
    marginTop: 20,
  },

  confirmButton: {
    flex: 1,

    backgroundColor: '#2e8b57',

    padding: 12,

    borderRadius: 12,

    alignItems: 'center',

    marginRight: 5,
  },

  finishButton: {
    flex: 1,

    backgroundColor: '#007bff',

    padding: 12,

    borderRadius: 12,

    alignItems: 'center',

    marginRight: 5,
  },

  cancelButton: {
    flex: 1,

    backgroundColor: '#d9534f',

    padding: 12,

    borderRadius: 12,

    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

});

export default styles;