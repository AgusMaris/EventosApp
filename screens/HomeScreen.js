import React from 'react'
import { render } from 'react-dom'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import NewEventScreen from './NewEventScreen'

function obtenerColor (i){
    const colors=["red", "orange", "green", "yellow", "lightblue"]
        const index=i%5
        return colors[index]
}

function renderItem (object){
    

    return(
        <TouchableOpacity
            style={[styles.button,{backgroundColor: obtenerColor(object.index)}]}
        >{object.item}</TouchableOpacity>



    )
    
}

const HomeScreen = (props) => {

    const EventList = ["evento1","evento2","evento3","evento3","evento3","evento3"]
    return (
        <View>

            <Button onPress={()=> props.navigation.navigate("Event")} title="Evento" color ="grey"></Button>

            <View>
                <FlatList data = {EventList}
                            renderItem = {(object) => renderItem(object)}>

                </FlatList>
            </View>
            <TouchableOpacity onPress={()=> props.navigation.navigate("Nuevo Evento")}
                            style = {styles.nuevo}
                            
            >
                +
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
