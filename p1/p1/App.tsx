import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 

const App = () => {
  
  return (
    <View style={styles.container}>
      {/* Navbar View */}
      
      <View style={styles.navbar}>
       
        <Text style={styles.antimg}>Minha</Text>
        <Image source={require('./assets/logoclaro.png')} style={styles.logo} />
        
      </View>

      {/* Content View */}
      <View style={styles.content}>
        <Text style={styles.title}>Validador de boleto</Text>
        <Text style={styles.title2}>Confirme a autenticidade do seu boleto de forma prática e efetue o seu pagamento com segurança</Text>
        <Text style={styles.subtitle}>insira o código de barras do boleto que vc deseja validar</Text>
        
        <TextInput
          style={styles.input}
          placeholderTextColor='#0a0a0a'
          placeholder="Código de barras"
          
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Validar boleto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
      <MaterialCommunityIcons name="facebook" size={18} color="#fff" />
      <SimpleLineIcons name="social-twitter" size={18} color="#fff" />
      <SimpleLineIcons name="social-instagram" size={18} color="#fff" />
      <SimpleLineIcons name="social-youtube" size={18} color="#fff" />
      <Foundation name="social-linkedin" size={18} color="#fff" />


      </View>

     
    </View>
  );
};

export default App;
