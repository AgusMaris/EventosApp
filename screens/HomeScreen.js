import React,{useContext} from 'react'
import { render } from 'react-dom'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import NewEventScreen from './NewEventScreen'
import EventosContext from '../context/EventosContext'

function obtenerColor (i){
    const colors=["red", "orange", "green", "yellow", "lightblue"]
        const index=i%5
        return colors[index]
}

function renderItem (object, navigate){
    

    return(
        <TouchableOpacity
            style={[styles.button,{backgroundColor: obtenerColor(object.index)}]}
            onPress={()=> navigate("Event",{id:object.item.id})}
        >
            <Text>{object.item.nombre} ({object.item.participantes.filter(p=>{return p.asiste}).length}/{object.item.participantes.length} Participantes)</Text> 
        </TouchableOpacity>



    )
    
}

const HomeScreen = (props) => {
    const eventosContext = useContext(EventosContext)
    const {eventos, agregarNuevoEvento} = eventosContext

    return (
        <View>

            <Button onPress={()=> props.navigation.navigate("Event")} title="Evento" color ="grey"></Button>

            <View>
                <FlatList data = {eventos}
                            renderItem = {(object) => renderItem(object, props.navigation.navigate)}>

                </FlatList>
            </View>
            <TouchableOpacity onPress={()=> props.navigation.navigate("Nuevo Evento")}
                            style = {styles.nuevo}             
            >
                <Text>+</Text>
            </TouchableOpacity>
        </View>   

    )
    
}

export default HomeScreen


const styles = StyleSheet.create({

    button:{
        alignItems : 'center',
        backgroundColor: "green",
        padding: 8,
        marginVertical: 10,
        width: 200,
        alignSelf: 'center',
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:2,
        borderColor: "black",
        shadowRadius:7
        

    },

    nuevo:{
        fontSize:23,    
        alignSelf: 'center',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#ffd966',
        borderRadius:50,
        borderColor: '#2b2924',
        shadowRadius:7

    },

})
