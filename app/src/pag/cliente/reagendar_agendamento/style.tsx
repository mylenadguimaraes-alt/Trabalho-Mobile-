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
    color: '#2d2d2d',
    marginBottom: 25,
  },

  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#2d2d2d',
  },

  hourButton: {

    backgroundColor: '#fff',

    paddingVertical: 14,

    paddingHorizontal: 22,

    borderRadius: 20,

    marginRight: 10,

    borderWidth: 1,

    borderColor: '#ddd',

  },

  hourButtonSelected: {

    backgroundColor: '#a07e28',

    borderColor: '#a07e28',

  },

  hourText: {

    color: '#2d2d2d',

    fontWeight: '700',

  },

  hourTextSelected: {

    color: '#fff',

  },

  button: {

    backgroundColor: '#a07e28',

    padding: 18,

    borderRadius: 18,

    alignItems: 'center',

    marginTop: 30,

  },

  buttonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: '700',

  },

});

export default styles;