import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Switch, FlatList } from 'react-native'
import EventosContext from '../context/EventosContext'
import ParticipanteSwitch from '../components/ParticipanteSwitch'

const EventScreen = (props) => {
  const eventosContext = useContext(EventosContext)
  const { traerEventoId, agregarNuevoEvento, eventos } = eventosContext
  const [evento, setEvento] = useState(null)

  useEffect(() => {
    if (props.route.params.id) {
      console.log(props.route.params.id)
      const evento = traerEventoId(props.route.params.id)
      setEvento(evento)
    }
  }, [props.route.params.id])

  const switching = (id) => {
    const eventoActualizado = {
      ...evento,
      "participantes": evento.participantes.map(p => {
        if (id == p.id) {
          p.asiste = !p.asiste
        }
        return p
      })
    }
    setEvento(eventoActualizado)
    agregarNuevoEvento(eventoActualizado)
  }

  if (evento != null) {
    return (
      <View style={styles.container1}>
        {console.log(eventos)}
        <FlatList
          data={evento.participantes}
          renderItem={(object) =>
            <ParticipanteSwitch onValueChange={switching} data={object} />}>
        </FlatList>
      </View>

    )
  } else {
    return (
      <Text>Cargando</Text>
    )
  }
}

export default EventScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container1: {
    padding: 30,

  },
})
