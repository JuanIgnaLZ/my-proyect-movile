import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import { StyleSheet, Text, View, TextInput, Dimensions, Switch, } from 'react-native';
const {width, height } = Dimensions.get('window')

const App = () => { 
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  
    return (
      <View style={styles.container}>        
        <Text style={styles.title}>VITEtuSALUD</Text>
        <TextInput        
          placeholder='Presión sistólica'//Frecuenci cardiaca
          style={styles.textFirstInput}
        />
        <TextInput        
          placeholder='Presión diastólica'
          style={styles.textInput}
        />
        <TextInput        
          placeholder='Edad: Ej. 18'
          style={styles.textInput}
        />
        <TextInput        
          placeholder='Peso 77 Kg'
          style={styles.textInput}
        />
        <TextInput        
          placeholder='Altura 1.75'
          style={styles.textInput}
        />
        <TextInput        
          placeholder='Colesterol 200 mg/dl'
          style={styles.textInput}
        />
        <Text style={styles.subTitle}>Cuenta con</Text>
        <Text style={styles.text}>Algun familiar con diabetes</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />      
        <Text style={styles.text}>Realiza Actividad fisica</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isEnabled ? '#93be4f' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {/* <Text>Este app es de uso estudiantil pero en todo momento recomendamos el cuidado de la salud, la practica de ejercicio y una buena alimentacion</Text> */}
        <StatusBar style="auto" />
        </View>    

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',      
    backgroundColor: '#000',  
    width: '100%',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  subTitle: {
    fontSize: 30,
    color: '#000',    
  },
  text: {
    fontSize: 18,
    color: '#000', 
    marginTop: 10,       
  },
  textInput: {

    padding: 6,
    paddingStart: 20,
    width: '70%',
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  textFirstInput: {
    padding: 6,
    paddingStart: 20,
    width: '70%',
    height: 40,
    marginTop: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  
});

export default App;