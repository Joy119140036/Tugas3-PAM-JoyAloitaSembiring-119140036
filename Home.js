import React, {Component} from 'react';
import {StyleSheet,Text,SafeAreaView,View,ScrollView,TextInput,TouchableOpacity,StatusBar } from 'react-native';


const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <StatusBar barStyle="hidden"/>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Pemesanan Tiket</Text>
          <Text style={styles.headline}>Pencarian Jadwal</Text>
          <View style={styles.main}>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Asal</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('keberangkatan')}
                  value={text.keberangkatan} placeholder="Bandara Asal"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Tujuan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('kedatangan')}
                  value={text.kedatangan} placeholder="Bandara Tujuan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Tanggal Keberangkatan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('tanggal')}
                  value={text.tanggal} placeholder="Tanggal Keberangkatan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details', {text})}>
                <Text style={styles.buttonText}>Mari Berangkat!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.copyright}>Joy Aloita Sembiring - 119140036</Text>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#F1C40F',
  },
  header: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: 20,    
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  main: {
    margin: 35,  
    marginTop: 65,  
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginVertical: 95,
  },
  group: {
    marginBottom: 25,
  },
  search: {
    marginLeft:15,    
    flexDirection: 'row', 
    justifyContent: 'center',   
    alignItems: 'center',
  },
  iconcalendar: {
    paddingRight: 5,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e84f1f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#283593',
    borderRadius: 45,
    color: '#283593',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 35,
    width: 245,
    flex: 1,
  },
  button: {
    backgroundColor: '#C6ED25',
    borderRadius: 435,
    marginHorizontal: 45,
    paddingVertical: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Home;