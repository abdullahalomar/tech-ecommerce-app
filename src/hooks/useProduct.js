import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function useProduct() {

    const [results, setResults] = useState([])

    useEffect(()=> {
        fetch('https://api.sohojearning.com/wp-json/wc/v3/products')
        .then(response => response.json())
        .then(data => setProducts(data))
      }, [])

  return [results];
}

