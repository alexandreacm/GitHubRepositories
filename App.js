import React, { useReducer, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';


import ListItem from './src/components/ListItem';
import Loading from './src/components/Loading';
import HeaderGradient from './src/components/HeaderGradient';

import { colors } from './src/config';

const initialState = {
  loading: false,
  data: [],
  total: 0,
  page: 1,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetchDataStart':
      return {
        ...state,
        loading: true,
        data: [],
        total: 0,
        page: 1,
        error: null
      };
    case 'fetchDataSuccess':
      return {
        ...state,
        loading: false,
        data: action.payload,
        total: action.total,
        page: action.page + 1,
        error: null
      };
    case 'fetchDataFail':
      return {
        ...state,
        loading: false,
        data: [],
        total: 0,
        page: 0,
        error: 'Error while loading data...'
      };
    default:
      return state;
  }
}

export default function App() {
  const baseUrl = `https://api.github.com`;
  const perPage = 20;

  const [{ page, loading, data, total }, dispatch] = useReducer(
    reducer,
    initialState
  );


  useEffect(() => {
    loadRepositories();
  }, []);

  async function loadRepositories() {
    try {

      const headerOptions =   {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }

      if (loading) return;

      dispatch({ type: 'fetchDataStart' });

      const response = await fetch(
        `${baseUrl}/search/repositories?q=React&per_page=${perPage}&page=${page}`, headerOptions);

      const { items, total_count } = await response.json();

      dispatch({
        type: 'fetchDataSuccess',
        payload: items,
        total: total_count,
        page: page
      });
    } catch (err) {
      dispatch({ type: 'fetchDataFail', payload: err });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor={colors.statusBarColor} />

      <HeaderGradient total={ total } page={ page } />

      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={{ marginHorizontal: 10 }}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.1} //10%
        ListFooterComponent={<Loading load={loading} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG
  }
});
