import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function useCategory() {

    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
      }, [])

  return [categories];
}