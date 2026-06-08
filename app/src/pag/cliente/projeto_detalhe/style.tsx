import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  banner: {
    width: '100%',
    height: 320,
  },

  content: {
    padding: 20,
  },

  category: {
    alignSelf: 'flex-start',

    backgroundColor: '#f5ead0',

    color: '#a07e28',

    paddingVertical: 6,
    paddingHorizontal: 14,

    borderRadius: 30,

    fontWeight: '600',

    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2d2d2d',
  },

  description: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 26,
    color: '#666',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d2d2d',
    marginTop: 30,
    marginBottom: 15,
  },

  longDescription: {
    color: '#666',
    lineHeight: 26,
    fontSize: 15,
  },

  galleryImage: {
    width: 220,
    height: 160,
    borderRadius: 20,
    marginRight: 12,
  },

  button: {
    backgroundColor: '#a07e28',

    paddingVertical: 18,

    borderRadius: 20,

    alignItems: 'center',

    marginTop: 35,
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

});

export default styles;