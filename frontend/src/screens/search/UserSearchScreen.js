import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { SafeAreaView, View, StyleSheet, FlatList, Text, TextInput } from 'react-native';
import { PROFILES } from '../../data/profile';


const Tab = createMaterialTopTabNavigator();

function UserSearchScreen() {
  // profile
  const [filterdData, setfilterdData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    featchPosts();
    return () => {

    }
  }, [])

  const featchPosts = () => {
      setfilterdData(PROFILES);
      setmasterData(PROFILES);
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.user ? item.user.toUpperCase()
                    : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterdData(newData);
      setSearch(text);
    } else {
      setfilterdData(masterData);
      setSearch(text);
    }
  }

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.user.toUpperCase()}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View 
      style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}>

      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={StyleSheet.container}>
        <TextInput
          style = {styles.textInputStyle}
          value={search}
          placeholder="검색검색"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        >
          
        </TextInput>
        <FlatList
        data={filterdData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  itemStyle: {
    padding: 15
  },
  textInputStyle: {
    height:50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: 'white'
  }

})
export default UserSearchScreen;
