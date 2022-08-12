import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Divider} from '@rneui/base/dist/Divider';
import {View, SafeAreaView, FlatList} from 'react-native';
import LiveFilterButtonTabs from '../../components/live/LiveFilterButtonTabs';
import Lives from '../../components/live/Lives';
import LiveLogoSearch from '../../components/live/LiveLogoSearch';
import UseAxios from '../../util/UseAxios';
import UserContext from '../../util/UserContext';
import LiveRecentPopularTabs from '../../components/live/LiveRecentPopularTabs';
import {useIsFocused} from '@react-navigation/native';

function LiveScreen({navigation}) {
  const {userData} = useContext(UserContext);
  const [filterName, setFilterName] = useState('전체');
  const [isPopular, setIsPopular] = useState('최신');
  const [lives, setLives] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const filterToCode = {
    전체: 0,
    연애: 'B0101',
    병맛: 'B0102',
    음식: 'B0103',
    게임: 'B0104',
    운동: 'B0105',
    학교: 'B0106',
    직장: 'B0107',
    갈등: 'B0108',
    기타: 'B0199',
  };

  const getData = () => {
    setRefreshing(true);
    UseAxios.get('/lives/list', {
      params: {categorycode: filterToCode[filterName]},
    })
      .then((res) => {
        const result = res.data.filter((board) => board.live);
        if (isPopular === '인기순') {
          result.sort(function (a, b) {
            const participantsA = a.liveOpt1Selected + a.liveOpt2Selected;
            const participantsB = b.liveOpt1Selected + b.liveOpt2Selected;
            if (participantsA > participantsB) return -1;
            if (participantsA === participantsB) return 0;
            if (participantsA < participantsB) return 1;
          });
        } else {
          result.sort(function (a, b) {
            if (a.boardId > b.boardId) return -1;
            if (a.boardId === b.boardId) return 0;
            if (a.boardId < b.boardId) return 1;
          });
        }
        setLives(result);
      })
      .then(() => setRefreshing(false));
  };
  const onRefresh = () => {
    if (!refreshing) {
      getData();
    }
  };

  useEffect(() => getData(), [filterName, userData, isPopular, isFocused]);

  const renderItem = ({item}) => (
    <Lives live={item} navigation={navigation}></Lives>
  );
  const keyExtractor = (item) => item.boardId;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{flex: 1}}>
        <LiveLogoSearch navigation={navigation}></LiveLogoSearch>
        <Divider width={0.5} color={'#A6A6A6'}></Divider>
        <LiveFilterButtonTabs setFilterName={setFilterName} />
        <Divider width={0.5} color={'#A6A6A6'}></Divider>
        <LiveRecentPopularTabs
          setIsPopular={setIsPopular}></LiveRecentPopularTabs>
        <Divider width={0.5} color={'#A6A6A6'}></Divider>
        <View style={{flex: 1, paddingHorizontal: 16}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            legacyImplementation={true}
            data={lives}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            disableVirtualization={true}
            onRefresh={onRefresh}
            refreshing={refreshing}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LiveScreen;
