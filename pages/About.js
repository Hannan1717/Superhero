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
    backgroundColor: '#242424',
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
  itemListContent: {
    alignItems: 'center',
    marginTop: 55,
    marginHorizontal: 55,
  },
  itemListText: {
    color: '#626262',
    marginVertical: 0,
    fontWeight: 'reguler',
    fontSize: 19,
    textAlign: 'center',
  },
});

export default About;
