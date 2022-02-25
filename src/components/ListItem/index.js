import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../config';

export default function ListItem({ data: { full_name } }) {
  return (
    <LinearGradient style={styles.listItem} colors={colors.GRADIENT_COLOR}>
      <Text style={styles.listText}>{full_name}</Text>
    </LinearGradient>
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
