import React from 'react';
/* TouchableHighlight es para crear un propio boton ya que button no se puede modificar por que es nativo de. ANDROID o IOS */
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const cita = ({cita, eliminarPaciente}) => {
  //funcion para eliminar
  const dialogoEliminar = id => {
    console.log('Eliminando......',id);
    //return; se prueba para q muestre q va eliminando en el consol  
    eliminarPaciente(id); 
  }
  return (
    /* hay que usar el item cuando se hace con FlatList */
    <View style={styles.cita}>
      <View>
        {/* para llamar el selector de estilo que se va aplicar hay
                                que usar:
                                style={constante.selector creado o cargado con estilos} */}
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        {/* onpress es para cuando se presione un boton en react de mobile */}
        <TouchableHighlight onPress={() => dialogoEliminar(cita.id)} style={styles.btnDelete}>
          <Text style={styles.textoEliminar}> Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

//siempre que vamos a usar los estilos hay que importarlo arriba y crear una constante para llamar el creador de Stilos que es StyleSheet.create({}) esta es la sintaxis para dar stilos a un proyecto de js
const styles = StyleSheet.create({
  //estos son selectores parecido a los de css cuando se crea una clase .cita{} pero en react es de esta manera cita: {ingresar cuantas propiedades quiera para tener una buena vista}
  cita: {
    backgroundColor: '#FFF', //color de fondo de las citas
    borderBottomColor: '#e1e1e1', //color separacion citas
    borderStyle: 'solid', //stilo de linea de separacion
    borderBottomWidth: 1, //ancho de estilo de linea que es solid
    paddingVertical: 20, //padding arriba o abajo estas propiedades son solo de react
    paddingHorizontal: 10, // padding a la derecha o a la izquierda estas propiedades son solo de react
  },
  //selectores o clases
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    color: '#000',
  },
  //selectores o clases
  texto: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default cita;
