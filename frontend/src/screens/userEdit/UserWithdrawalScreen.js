import {View, StyleSheet} from 'react-native';
import React from 'react';
import UserWithdrawal from '../../components/setting/UserWithdrawal';

const UserWithdrawalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <UserWithdrawal></UserWithdrawal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 0,
  },
});

export default UserWithdrawalScreen;
