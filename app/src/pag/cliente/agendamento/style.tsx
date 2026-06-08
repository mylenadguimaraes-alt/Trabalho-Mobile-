import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 10,
  },

  subtitle: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },

  calendarContainer: {
    backgroundColor: 'rgba(255,255,255,0.55)',

    borderRadius: 30,
    padding: 15,

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 8,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 35,
    marginBottom: 20,
    color: '#2d2d2d',
  },

  hoursContainer: {
    marginTop: 10,
  },

  hourButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',

    paddingVertical: 15,
    paddingHorizontal: 24,

    borderRadius: 30,
    marginRight: 12,

    borderWidth: 1,
    borderColor: '#eee',
  },

  hourButtonSelected: {
    backgroundColor: '#a07e28',
  },

  hourText: {
    color: '#444',
    fontWeight: '700',
    fontSize: 15,
  },

  hourTextSelected: {
    color: '#fff',
  },

  selectedInfo: {
    marginTop: 30,

    backgroundColor: 'rgba(255,255,255,0.65)',

    padding: 20,
    borderRadius: 25,

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 4,
  },

  selectedText: {
    color: '#444',
    fontSize: 16,
    lineHeight: 28,
  },

  button: {
    backgroundColor: '#a07e28',

    paddingVertical: 20,

    borderRadius: 22,

    alignItems: 'center',

    marginTop: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  appointmentCard: {
    marginTop: 30,

    backgroundColor: '#fff',

    borderRadius: 25,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  appointmentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 15,
  },

  appointmentText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 24,
  },

  appointmentButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },

  secondaryButton: {
    flex: 1,

    backgroundColor: '#f5ead0',

    paddingVertical: 14,

    borderRadius: 18,

    alignItems: 'center',

    marginRight: 10,
  },

  secondaryButtonText: {
    color: '#a07e28',
    fontWeight: '700',
  },

});

export default styles;