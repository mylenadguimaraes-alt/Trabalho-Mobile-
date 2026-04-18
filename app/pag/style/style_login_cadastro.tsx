import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    
    container:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',  
    },

    login:{
        width: '100%',
        padding: 30,
        backgroundColor: '#ffe6fd',
    
        
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        borderWidth:  2,
        borderColor: '#a07e28',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },

    cadastro:{
        width: '100%',
        padding: 30,
        backgroundColor: '#ffe6fd',
    
        
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        borderWidth:  2,
        borderColor: '#a07e28',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },

    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center', 
    },

    title: {
        fontSize: 30,
        color: '#a07e28',
        fontWeight: 'bold',
    },

    text: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        color: '#a07e28',
    },

    input: {
        padding: 15,
        margin: 5,
        color: '#a07e28',
        backgroundColor: '#ffffff6c',
        width: '100%',
        borderWidth:  2,
        borderColor: '#a07e28',
        borderRadius: 20,
        fontSize: 18,
        
    },

    input_senha: {
        padding: 15,
        margin: 5,
        color: '#a07e28',
        backgroundColor: '#ffffff6c',
        width: '85%',
        borderWidth:  2,
        borderColor: '#a07e28',
        borderRadius: 20,
        fontSize: 18,
        
    },

    senha: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    senha_imagem: {
        width: 40,
        height: 30,  

    },

    buttons: {
        width: '100%',
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button_item: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        width: '50%',
        borderWidth:  2,
        borderColor: '#a07e28',
        borderRadius: 20,
    },

    

});

export default styles;