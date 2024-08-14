import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/camion2.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
      <Text style={{ color: '#ffffff', fontSize: 40 }}>Login</Text>
      <Text style={{ color: '#ffffff', fontSize: 20, top: 7}}> Please sing in to continue</Text>
      </View>
      <TextInput style = {styles.caja1}>
        <Text>
          <Text style={{ fontWeight: 900, fontSize: 20,color: '#ffffff' }}>Ingrese Gmail</Text>
        </Text>
      </TextInput>
      <TextInput style = {styles.caja2}>
        <Text>
          <Text style={{ fontWeight: 900, fontSize: 20,color: '#ffffff' }}>Ingrese Contraseña</Text>
        </Text>
      </TextInput>
      <TouchableOpacity style ={styles.login}>
        <Text style={{fontSize: 20,color: '#ffffff',textAlign:'center', marginTop: 19, }}>Ingresar</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja1: {
    backgroundColor: "#3c3c3c",
    height: 60, 
    width: 340,
    borderRadius: 30,
    marginTop: 40 ,
    textAlign:'center',
  },
  caja2: {
    backgroundColor: "#3c3c3c",
    height: 60, 
    width: 340,
    borderRadius: 30,
    marginTop: 30 ,
    textAlign:'center',
  },
  login: {
    backgroundColor: "#3c3c3c",
    height: 60, 
    width: 150,
    borderRadius: 30,
    marginTop: 30 ,
    marginLeft: 100,  
  },
});
