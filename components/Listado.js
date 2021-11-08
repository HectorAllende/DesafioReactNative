import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Listado = ({item, eliminarListado}) => {

    const {listado}=item
    return ( 
        <View style={styles.lista}>
            <Text style={styles.fs}>{listado}</Text>
            <View>
                <TouchableHighlight onPress={()=> eliminarListado(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.texto}>Eliminar &times;</Text>
                </TouchableHighlight>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lista:{
        backgroundColor: '#EAEDED',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    texto:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnEliminar:{
        padding: 5,
        backgroundColor: 'red',
        marginVertical: 10
    },
    fs:{
        fontSize:18
    }
})
 
export default Listado;