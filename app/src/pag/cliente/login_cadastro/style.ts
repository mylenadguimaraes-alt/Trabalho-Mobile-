import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#f7f7f7',
  padding: 20,
},
  login: {
    width: '100%',
    maxWidth: 420,

    backgroundColor: '#fff',

    borderRadius: 30,
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 6,
  },

  cadastro: {
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
    marginVertical: 30,

    backgroundColor: '#fff',

    borderRadius: 30,
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 6,
  },

  cadastro_scroll: {
    paddingBottom: 20,
  },

  dentro_cad_scroll: {
    width: '100%',
  },

  title_container: {
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2d2d2d',
  },

  text: {
    fontSize: 15,
    color: '#666',
    marginBottom: 8,
    marginTop: 12,
    marginLeft: 3,
  },

  input: {
    width: '100%',
    height: 58,

    borderWidth: 1.5,
    borderColor: '#e7d8b5',

    borderRadius: 18,

    paddingHorizontal: 18,

    backgroundColor: '#fcfcfc',

    fontSize: 16,
    color: '#333',
  },

  senha: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',

    borderWidth: 1.5,
    borderColor: '#e7d8b5',

    borderRadius: 18,

    paddingHorizontal: 10,

    backgroundColor: '#fcfcfc',
  },

  input_senha: {
    flex: 1,
    height: 58,
    fontSize: 16,
    color: '#333',
  },

  senha_imagem: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  button_item: {
    flex: 1,

    backgroundColor: '#a07e28',

    paddingVertical: 16,

    borderRadius: 18,

    alignItems: 'center',

    marginHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.12,
    shadowRadius: 5,

    elevation: 5,
  },

});

export default styles;