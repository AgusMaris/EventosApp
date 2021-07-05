import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'

const BotonMas = ({ action }) => {
  return (
    <TouchableOpacity onPress={action}
      style={styles.nuevo}>
      <Text>+</Text>
    </TouchableOpacity>
  )
}

export default BotonMas

const styles = StyleSheet.create({
  nuevo: {
    fontSize: 23,
    alignSelf: 'center',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: Platform.OS === "ios" ? '#ef4b55' : '#ffd966',
    borderRadius: 50,
    borderColor: '#2b2924',
    shadowRadius: 7

  },
})
