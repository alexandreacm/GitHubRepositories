import React from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';

export default function Loading({ load }) {
  if (!load) return null;

  return (
    <View style={styles.load}>
      <ActivityIndicator size='large' color='#D2691E' />
    </View>
  );
}

const styles = StyleSheet.create({
  load: {
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  }
});
