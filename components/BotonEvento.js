import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

function obtenerColor (i){
  const colors=["red", "orange", "green", "yellow", "lightblue"]
      const index=i%5
      return colors[index]
}

const BotonEvento = ({data}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: obtenerColor(data.index) }]}
      onPress={() => navigation.navigate("Event", { id: data.item.id })}>
      <Text>{data.item.nombre} ({data.item.participantes.filter(p => { return p.asiste }).length}/{data.item.participantes.length} Participantes)</Text>
    </TouchableOpacity>
  )
}

export default BotonEvento

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: "green",
    padding: 8,
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    borderColor: "black",
    shadowRadius: 7


  },
})
