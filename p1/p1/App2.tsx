import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles2';

const App = () => {
  
  return (
    <View style={styles.container}>
      {/* Navbar View */}
      <View style={styles.navbar}>
        <Image source={require('./assets/logoclaro.png')} style={styles.logo} />
      </View>

      {/* Content View */}
      <View style={styles.content}>
        <Text style={styles.title}>Olá</Text>
        <Text style={styles.title2}>Vamos iniciar seu processo de cadastro no Minha Claro</Text>
        <Text style={styles.subtitle}>Informe o CPF ou CNPJ</Text>
        
        <TextInput
          style={styles.input}
          placeholderTextColor='#0a0a0a'
          placeholder="CPF/CNPJ"
          
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
