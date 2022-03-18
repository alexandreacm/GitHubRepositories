import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../config';

export default function ListItem({ data: { full_name } }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{full_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.listItemColor,
    marginBottom: 10
  },
  listText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f3f3'
  }
});
