import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

export default function ResultsList({navigation,title, results}) {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result)=> result.id}
      renderItem={({ item }) => {
        return <ResultDetail navigation={navigation} result={item} />
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: '800',
        color: '#343A40'
    }
})