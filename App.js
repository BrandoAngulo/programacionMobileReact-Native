//view es como si fuera un div en html
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';


const App = () => {
  //Define el state de citas
  const [citas, setCitas] = useState([
    {
      id: '1',paciente: 'Hook',propietario: 'Brando Angulo',sintomas: 'No Come',},
    {id: '2', paciente: 'Redux', propietario: 'Robert Pozu', sintomas: 'Gripa'},
    {id: '3', paciente: 'native', propietario: 'Kelly Hernandez', sintomas: 'Fiebre',},
  ]);

  //funcion para eliminar un paciente
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id); //filter va ir iterando en los state como si fuera un for  
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

    <Formulario />

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>

      

      {/* en vez de usar el componente map se va a utilizar un componente de react-native que es FlatList ya que es optimizado para dispositivos moviles */}
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}//hay que pasarle la funcion eliminar para que aga efecto
        /* keyExtractor pasa un id unico a cada state */
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    /* crece el color en todo el espacio disponible*/
    flex: 1,
  },

  titulo: {
    color: '#FFF',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
     
  },
});

export default App;
