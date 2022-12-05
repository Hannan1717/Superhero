import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Hero({ navigation }) {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  function getData() {
    fetch('http://localhost:3000/hero')
      .then((response) => response.json())
      .then((json) => {
        setFilteredData(json);
        setMasterData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.nama ? item.nama.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setsearch(text);
    } else {
      setFilteredData(masterData);
      setsearch(text);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TextInput style={styles.searchbar} value={search} placeholder="Search here" underlineColorAndroid="transparent" onChangeText={(text) => searchFilter(text)}></TextInput>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail Hero', { msg: item.id })}>
            <View style={styles.oddItemListContainer}>
              <Image source={{ uri: item.gambar }} style={styles.ImageMovie} />
              <View style={styles.itemListContent}>
                <Text style={styles.itemListText}>{item.nama}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchbar: {
    marginHorizontal: 20,
    height: 45,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    borderWidth: 1,
  },
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ImageMovie: {
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListText: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default Hero;
