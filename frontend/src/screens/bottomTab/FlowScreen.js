import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Flows from '../../components/flow/Flows';
import UseAxios from '../../util/UseAxios';

// 게시글 가져오기 :  /api/boards/list/{userid}  인풋 : userId, categoryCode, order?categorycode=””
function FlowScreen({navigation}) {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    UseAxios.get('/boards/flow').then(res => {
      setBoards(res.data);
      console.log(res.data);
    });
  }, []);

  const renderItem = useCallback(
    ({item}) => <Flows board={item} navigation={navigation}></Flows>,
    [],
  );
  const keyExtractor = useCallback(item => item.boardId, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        legacyImplementation={true}
        initialNumToRender={3}
        windowSize={3}
        data={boards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        disableVirtualization={false}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({});
export default FlowScreen;
