import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [titulo, setTitulo] = useState('primeiro titulo');

  function alterTitulo() {
   setTitulo('Novo titulo');
  }

  return (
    <>
    <View style={{flex:1, flexDirection:'column',marginBottom: '64px', alignItems:'center', justifyContent:'flex-start',padding:16}}>
      <Text>Curso Sujeito programador</Text>
      <Text>React Native</Text>
      <Text style={{ color:'#3344ff', fontSize: 25, margin:16}}>
        Hello World!!
      </Text>
      <Jobs largura={150} altura={150} name={'Steve Jobs'}/>
      <View>
        <Text>State:</Text>
        <Text>{titulo}</Text>
        <TouchableOpacity style={styles.buttonAlter} onPress={alterTitulo}>
          Trocar Nome
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#445588'}}>
       <View style={{width:45,height:45,backgroundColor:'#995577'}}></View>
       <View style={{flex:1,backgroundColor:'red'}}></View>
       <View style={{flex:2,backgroundColor:'green'}}></View>
       <View style={{flex:0.5,backgroundColor:'violet'}}></View>
       <View style={{flex:0.75,backgroundColor:'magento'}}></View>
    </View>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAlter: {
    backgroundColor: '#4B0082',
    color: '#ffff',
    fontWeight: 'bold',
    padding: 16,
    width:150,
    alignItems:'center',
    borderRadius: '6px'
  }
});

class Jobs extends Component {
  render() {
    let img = "https://sujeitoprogramador.com/steve.png";

    return (
      <View>
        <Image 
         source={{ uri: img}}
         style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}