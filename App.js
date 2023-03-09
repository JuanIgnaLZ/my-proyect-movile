import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VITEtuSALUD</Text>
      <TextInput        
        placeholder='Presión sistólica'//Frecuenci cardiaca
        style={styles.textInput}
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
      <StatusBar style="auto" />
      <Text style={styles.subTitle}>Cuenta con</Text>
      <Text style={styles.text}>Algun familiar con diabetes</Text>
      <Text style={styles.text}>Enfermedades del pancrear</Text>
      <Text style={styles.text}>Realiza Actividad fisica</Text>
      {/* <Text>Este app es de uso estudiantil pero en todo momento recomendamos el cuidado de la salud, la practica de ejercicio y una buena alimentacion</Text> */}
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
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 30,
    color: '#000',    
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  textInput: {
    padding: 6,
    paddingStart: 20,
    width: '70%',
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
});
