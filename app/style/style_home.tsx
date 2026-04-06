import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',  
    },

    header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffe6fd',
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },

  logo: {
    width: 140,
    height: 60,  

  },

  user_log: {
    padding: 7,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#a07e28',
    borderRadius: 20,
    

    
  },

  text_user_log: {
    fontSize: 18,
    color: '#a07e28',
  },

  text: {
    margin: 20,
    fontSize: 16,
  },

});

export default styles;