import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListaParticipantes = ({ data }) => {
  return (
    <FlatList data={data.participantes}
      renderItem={(object) => 
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.lista}>{object.item.nombre}</Text>
      </View>} />
  )
}

export default ListaParticipantes

const styles = StyleSheet.create({
  lista: {
    fontSize: 17,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: '#fefefe',
    shadowRadius: 4,
    justifyContent: 'center',
    height: 30,

  },
})
