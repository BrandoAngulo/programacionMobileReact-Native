import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import de fecha y hora modal externo de github
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {

    //costantes importadas que compone el modal de datetime externo de github
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    //muesta u oculta el picker de fecha
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    //confirmar fecha
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    //muesta u oculta el picker de Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    //confirmar hora
    const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        //frafment <> enter </>
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label} >Paciente:</Text>
                    <TextInput style={styles.input}
                        //evento de leer el texto dgitado en el input se pone texto por q viene predefinido de react...
                        onChangeText={(texto) => console.log(texto)}
                        //para informacion de los tipos de teclado y autocorrecion de escritura para el usuario q use la app ir a la documentacion de ract, para encontrar esta parte debeos de escribir en google TextInput React-native y encontrara la documentacion para ir escogiendo.ejemplo:
                        keyboardType='email-address'
                    />
                </View>
                <View>
                    <Text style={styles.label} >Dueño:</Text>
                    <TextInput style={styles.input}
                        //evento de leer el texto dgitado en el input se pone texto por q viene predefinido de react...
                        onChangeText={(texto) => console.log(texto)}
                    //para informacion de los tipos de teclado y autocorrecion de escritura para el usuario q use la app ir a la documentacion de ract, para encontrar esta parte debeos de escribir en google TextInput React-native y encontrara la documentacion para ir escogiendo.ejemplo:

                    />
                </View>
                <View>
                    <Text style={styles.label} >Telefono celular:</Text>
                    <TextInput style={styles.input}
                        //evento de leer el texto dgitado en el input se pone texto por q viene predefinido de react...
                        onChangeText={(texto) => console.log(texto)}
                        //para informacion de los tipos de teclado y autocorrecion de escritura para el usuario q use la app ir a la documentacion de ract, para encontrar esta parte debeos de escribir en google TextInput React-native y encontrara la documentacion para ir escogiendo.ejemplo:
                        keyboardType='numeric'
                    />
                </View>

                <View>{/* Codigo que compone el modal externo de github */}
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        
                    />
                </View>
                <View>{/* Codigo que compone el modal externo de github */}
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        
                    />
                </View>

                <View>
                    <Text style={styles.label} >Sintomas:</Text>
                    <TextInput
                        //para que el input salga mas grande para mensajes largos como si fuera un textarea de HTML
                        multiline
                        style={styles.input}
                        //evento de leer el texto dgitado en el input se pone texto por q viene predefinido de react...
                        onChangeText={(texto) => console.log(texto)}
                    //para informacion de los tipos de teclado y autocorrecion de escritura para el usuario q use la app ir a la documentacion de ract, para encontrar esta parte debeos de escribir en google TextInput React-native y encontrara la documentacion para ir escogiendo.ejemplo:

                    />
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%' //no toma el 100% de las orillas y da un poco de separacion. 
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 28
    },
    input: {
        marginTop: 10,
        height: 58,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})

export default Formulario;
