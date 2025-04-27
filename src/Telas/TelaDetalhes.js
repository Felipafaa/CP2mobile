import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import pedro from "../../assets/pedrocareca.png";

export default function TelaDetalhes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a tela de detalhes.</Text>
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botaoTexto}>Voltar para Home</Text>
      </TouchableOpacity>
      <Image source={pedro} style={styles.imagem} />
    </View>
  );
}




















const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  botao: {
    backgroundColor: '#780606',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 210,
    marginTop: 20,
    borderRadius: 10,
  },
})
