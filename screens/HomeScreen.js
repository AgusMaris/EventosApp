import React, { useContext } from 'react'
import { render } from 'react-dom'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import EventosContext from '../context/EventosContext'
import BotonEvento from '../components/BotonEvento'
import BotonMas from '../components/BotonMas'

const HomeScreen = (props) => {
  const eventosContext = useContext(EventosContext)
  const { eventos, agregarNuevoEvento } = eventosContext

  return (
    <View style={{ padding: 20, justifyContent: "space-between", flex: 1 }}>
      <View>
        <FlatList data={eventos}
          renderItem={(object) => {
            return (
              <BotonEvento data={object} />
            )
          }}>

        </FlatList>

      </View>
      <BotonMas action={()=>props.navigation.navigate("Nuevo Evento")}/>
    </View>

  )

}

export default HomeScreen


const styles = StyleSheet.create({})
