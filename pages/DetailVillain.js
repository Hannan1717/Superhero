import { useEffect, useState } from 'react';
import { Image, View, FlatList, Text } from 'react-native';

const DetailVillain = ({ route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://localhost:3000/villain?id=' + route.params.msg)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                backgroundColor: '#A259FF',
                borderRadius: 24,
                alignItems: 'center',
                marginHorizontal: 15,
                padding: 20,
              }}
            >
              <Image
                source={{ uri: item.gambar }}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 60,
                  marginVertical: 20,
                }}
              />

              <Text
                style={{
                  color: '#FFFFFF',
                  marginVertical: -4,
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                {item.nama}
              </Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 3 }}>Combat : {item.combat}</Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 3 }}>Durability : {item.durabilty}</Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 3 }}>Intelligence : {item.intelligence}</Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 3 }}>Power : {item.power}</Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 3 }}>Speed : {item.speed}</Text>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 20 }}>Strength : {item.strength}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DetailVillain;
