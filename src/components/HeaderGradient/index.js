import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../config';

export default function HeaderGradient({ total, page }) {
  return (
    <View style={{ fle: 1, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient style={styles.header} colors={colors.GRADIENT_COLOR}>
        <Text style={styles.headerText}>
          Total repositories: {total && total}
        </Text>
        <Text style={styles.headerText}>
          Total perPage: {page !== 1 && page}
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    padding: 12,
    backgroundColor: colors.HEADER,
    opacity: 0.8,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    borderRadius: 8,
    justifyContent: `center` ,
    alignItems: `flex-start`
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'justify'
  }
});
