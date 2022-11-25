import { View, Text, Image, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/hero2.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Superhero</Text>
      </View>
      <View style={styles.itemListContent}>
        <Text style={styles.itemListText}>
          {'Superhero merupakan Aplikasi yang dikembangkan oleh Muhammad Hannan Mahasiswa Universitas Diponegoro Jurusan Teknik Komputer Angkatan 2020, dengan tujuan memenuhi tugas akhir praktikum pemrograman perangkat bergerak '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#8000CE',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerImage: {
    marginTop: 20,
    height: 200,
    width: 200,
    borderColor: '#00F645',
  },
  headerText: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    height: 'auto',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#A259FF',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    alignItems: 'center',
    marginTop: 30,
    margin: 25,
  },
  itemListText: {
    color: '#8000CE',
    marginVertical: 0,
    fontWeight: 'reguler',
    fontSize: 19,
    textAlign: 'center',
  },
  kotak: {
    height: '100%',
    paddingTop: 20,
  },
  numbers: {
    fontSize: 30,
    color: '#31C283',
    fontWeight: 'bold',
  },
});

export default About;
