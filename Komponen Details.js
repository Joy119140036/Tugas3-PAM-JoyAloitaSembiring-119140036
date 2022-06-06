import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList,} from 'react-native';


import { JADWAL, MASKAPAI, BANDARA } from '../database/db.js';

const Details = ({ route, navigation }) => {
  const data = route.params.text;
  const kedatanganId = BANDARA.find(item => item.bandara_nama === data.kedatangan).bandara_kode;
  const keberangkatanId = BANDARA.find(item => item.bandara_nama === data.keberangkatan).bandara_kode;
  const listAirplane = JADWAL.filter(item =>
    item.bandara_kode_keberangkatan === keberangkatanId &&
    item.bandara_kode_tujuan === kedatanganId &&
    item.jadwal_keberangkatan === data.tanggal);
  console.log(listAirplane);

  return (
    <>
      <StatusBar barStyle="hidden"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.header}>Pemesanan Tiket</Text>
            <Text style={styles.headline}>Pencarian Jadwal</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.search}>Hasil Pencarian</Text>
        </View>
        <FlatList
          data={listAirplane}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.Details}>
                <View style={styles.airport}>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_keberangkatan).bandara_nama}
                  </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_tujuan).bandara_nama}
                  </Text>
                </View>
                <View style={styles.time}>
                  <View style={styles.maskapai}>
                    <Text style={styles.text}>
                      {MASKAPAI.find(theItem => theItem.maskapai_id === item.maskapai_id).maskapai_nama}
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {item.jadwal_keberangkatan}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.jadwal_id}
        >

        </FlatList>

        <Text style={styles.copyright}>Joy Aloita Sembiring - 119140036</Text>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#F1C40F',
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },
  button: {
    backgroundColor: '#C6ED25',
    borderRadius: 35,
    elevation: 2,
    marginTop: 35,
    marginHorizontal: 35,
  },
  buttonText: {
    color: '#1C5989',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  header: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
  headline: {
    color: '#fff',
    fontSize: 17,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 35,
  },
  search: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 15,
  },
  card: {
    marginHorizontal: 25,
  },
  Details: {
    backgroundColor: '#F1C40F',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 10,
  },
  airport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapai: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconPlane: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
  copyright: {
    color: '#283593',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
});


export default Details;