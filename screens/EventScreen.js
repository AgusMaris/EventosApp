import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, FlatList } from 'react-native'

/*const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }*/





const EventScreen = () => {
  const switchEvent = (object) => {
    return (
      <View style={{flex:1, flexDirection:"row",alignItems:"center",marginBottom:10}}>
        <Text style={styles.partici,{flex:9,justifyContent:'center'}}>{object.item.nombre}</Text>
        <Switch style={{flex:1, justifyContent:"center"}} value={object.item.asiste}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={participantes ? "grey" : "green"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>switching(object.item.id)}

        />


      </View>
    )

  }
  const switching = (id) => {
    setParticipantes(previousState => {
      let nuevoarray  = [...participantes]
      nuevoarray.forEach(p=>{
        if (p.id==id){
          p.asiste = !p.asiste
        }
        
      })
      {console.log(nuevoarray)}
      return(nuevoarray)
    })
  }


  const [participantes, setParticipantes] = useState([
    { id: 1, nombre: "Agustin", asiste: false },
    { id: 2, nombre: "Matias", asiste: false },
    
  ])


  return (
    <View style={styles.container1}>

      <FlatList data={participantes}
        renderItem={(object) => switchEvent(object)}>

      </FlatList>
    </View>

  )
}

export default EventScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container1:{
    padding:30,

  },
})
