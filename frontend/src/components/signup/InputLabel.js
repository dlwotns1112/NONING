import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HalfInputLabel({name, star}) {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{name}</Text>
      <Text style={styles.labelStar}>{star}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'black',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
  },
  labelStar: {
    color: '#FF7171',
    textAlignVertical: 'top',
    paddingBottom: '1%',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '1.5%',
  },
});
