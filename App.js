import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    alert('Seu imc é: ' + imc.toFixed(2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      {/* CAMPO DE PESO */}

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder='Peso (kg)'
        placeholderTextColor='white'
        keyboardType='numeric'
      />

      {/* CAMPO DE ALTURA */}
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder='Altura (cm)'
        placeholderTextColor='white'
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 30,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#121212',
    width: '90%',
    margin: 20,
    padding: 18,
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
