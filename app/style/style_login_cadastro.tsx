import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    
    container:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',  
    },

    login:{
        width: '100%',
        padding: 30,
        backgroundColor: '#ffe6fd',
    
        //flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },

    login_text: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        color: '#a07e28',
    },

    login_input: {
        padding: 15,
        margin: 5,
        backgroundColor: '#ffffff6c',
        width: '100%',
        borderRadius: 20,
        
    },


    

});

export default styles;