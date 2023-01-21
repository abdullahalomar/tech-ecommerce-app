import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

export default function ResultsList({title, results}) {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
      {/* <Text>{results.length}</Text> */}
      <FlatList
      horizontal
      data={results}
      keyExtractor={(result)=> result.id}
      renderItem={({ item }) => {
        return <ResultDetail result={item} />
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