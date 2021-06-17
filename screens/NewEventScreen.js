import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'

const NewEventScreen = () => {

    const [participantes, setParticipantes] = useState([
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
        { id: 1, nombre: "Agustin", asiste: false },
        { id: 2, nombre: "Matias", asiste: false },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.participantesContainer}>
                <Text style={styles.titulo}>Participantes</Text>
                <FlatList  data={participantes}
                    renderItem={(object) => <View style={{justifyContent:"center"}}><Text style={styles.lista}>{object.item.nombre}</Text></View>}>

                </FlatList>

            </View>
            <View style={styles.nuevoParticipanteContainer}>
                <View style={{ flex: 1, flexDirection: "row", alignItems:"center" }}>
                    <View style={{ flex: 4, justifyContent:"center" }}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Nombre"/>
                        
                    </View>
                    <View style={{ flex: 1, justifyContent:"center" }}>
                        <TouchableOpacity
                            style={styles.nuevo}
                        >
                            +
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Guardar evento" color="#fabe0a"  />
                </View>
            </View>

        </View>
    )
}

export default NewEventScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    participantesContainer: {
        flex: 4,
        padding:30
    },
    nuevoParticipanteContainer: {
        borderTopColor:"black",
        borderTopWidth:1,
        flex: 1,
    },
    titulo:{
        fontSize:25,
        marginBottom:20,

    },
    lista:{
        fontSize:17,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: '#fefefe',
        shadowRadius:4,
        justifyContent: 'center',
        height: 30,
    
    },

    textInput:{
        borderColor: 'black',
        borderBottomWidth: 2,
        paddingVertical:5
    },
    nuevo:{
        fontSize:23,  
        alignSelf: 'center',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        backgroundColor:'#ffd966',
        borderRadius:50,
        borderColor: '#2b2924',
        shadowRadius:7

    },
})
