import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Villain({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://localhost:3000/villain')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailVillain', { msg: item.id })}>
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
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#A259FF',
    marginVertical: 5,
    borderRadius: 10,
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
    color: '#FFFFFF',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default Villain;
