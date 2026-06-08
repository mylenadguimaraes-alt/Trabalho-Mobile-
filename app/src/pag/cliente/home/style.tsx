import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  header: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 22,
    backgroundColor: '#ffe6fd',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
  },

  logo: {
    width: 175,
    height: 80,
    resizeMode: 'contain',
  },

  user_log: {
    width: 42,
    height: 42,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1.5,
    borderColor: '#a07e28',
    borderRadius: 100,

    backgroundColor: '#fff',
  },

  text_user_log: {
    fontSize: 18,
    color: '#a07e28',
    fontWeight: 'bold',
  },

  heroContainer: {
    marginBottom: 20,
  },

  text: {
    marginTop: 25,
    fontSize: 26,
    textAlign: 'center',
    color: '#2c2c2c',
    paddingHorizontal: 30,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 10,
    paddingHorizontal: 35,
  },

  banner: {
    width: '90%',
    height: 280,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 35,
    marginBottom: 18,
    marginLeft: 20,
    color: '#2d2d2d',
  },

  card: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 24,

    marginLeft: 20,
    marginRight: 8,
    marginBottom: 5,

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 6,
  },

  cardImage: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
  },

  cardOverlay: {
    position: 'absolute',
  },

  cardContent: {
    padding: 16,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2f2f2f',
  },

  cardDescription: {
    fontSize: 14,
    marginTop: 6,
    color: '#777',
    lineHeight: 20,
  },

  tag: {
    marginTop: 12,
    alignSelf: 'flex-start',

    backgroundColor: '#f5ead0',

    paddingVertical: 6,
    paddingHorizontal: 12,

    borderRadius: 30,
  },

  tagText: {
    color: '#a07e28',
    fontWeight: '600',
    fontSize: 12,
  },

  experienceContainer: {
    marginTop: 30,
    marginHorizontal: 20,

    backgroundColor: '#fff',

    padding: 25,

    borderRadius: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  experienceTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 10,
  },

  experienceText: {
    color: '#666',
    lineHeight: 24,
    fontSize: 15,
  },

  button: {
    backgroundColor: '#a07e28',

    paddingVertical: 18,
    borderRadius: 18,

    alignItems: 'center',

    marginTop: 35,
    marginHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.12,
    shadowRadius: 5,

    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  secondaryHomeButton: {
    backgroundColor: '#ffffff',

    borderWidth: 1.5,
    borderColor: '#a07e28',

    paddingVertical: 18,

    borderRadius: 18,

    alignItems: 'center',

    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 50,
  },

  secondaryHomeButtonText: {
    color: '#a07e28',
    fontSize: 17,
    fontWeight: '700',
  },

});

export default styles;