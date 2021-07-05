import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

const ParticipanteSwitch = ({ data, onValueChange }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <Text style={styles.partici, { flex: 9, justifyContent: 'center' }}>{data.item.nombre}</Text>
      <Switch style={{ flex: 1, justifyContent: "center" }}
        value={data.item.asiste}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onValueChange(data.item.id)}
      />
    </View>
  )
}

export default ParticipanteSwitch

const styles = StyleSheet.create({})
