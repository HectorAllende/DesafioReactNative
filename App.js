import { useState } from 'react';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Listado from './components/Listado';

export default function App() {

  const [total, setTotal] = useState([])

  const [listado, setListado] = useState('')

  const [error, setError] = useState(false)

  const eliminarListado = id =>{
    const listaNueva = total.filter(el => el.id !==id )
    setTotal(listaNueva)
  }

  const crearNuevo = () => {
    if (listado === '') {
      setError(true)
      return
    }
    setError(false)

    //Crear listado
   
    const lista = { listado }
    lista.id = Date.now()


    const listaNuevo = [...total, lista]

    setTotal(listaNuevo); 

    setListado('');

   


  }

  return (
    <View style={styles.container}>
      {error ? <View>Ingrese datos al listado</View> : null}

      <ScrollView>

        <View>
          <Text style={styles.titulo}>Ingrese tarea:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => setListado(texto)}
            placeholder="Ingrese tarea"
          />
        </View>

        <View>
          <TouchableHighlight onPress={() => crearNuevo()} style={styles.btnSubmit}>
            <Text style={styles.textoBtn}>Agregar a listado</Text>
          </TouchableHighlight>
        </View>

      </ScrollView>

      <Text style={styles.titulo}>Listado</Text>

      <FlatList
        data={total}
        renderItem={({ item }) => <Listado item={item} eliminarListado={eliminarListado} />}
      
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7DC6F',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titulo: {
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:30
  },
  input: {
    marginTop: 10,
    marginStart: 2,
    height: 50,
    padding: 2,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid'

  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10
  },
  textoBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
