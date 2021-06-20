import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'
import EventosContext from '../context/EventosContext'

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

const NewEventScreen = (props) => {
    const eventosContext = useContext(EventosContext)
    const {eventos, agregarNuevoEvento} = eventosContext
    const [evento, setEvento] = useState({
        "participantes":[],
        "nombre":""
    })
    const [participante, setParticipante] = useState("")

    const guardarEvento=()=>{
        agregarNuevoEvento(evento)
        props.navigation.goBack();
    }

    const handleParticipanteInput=(val)=>{
        setParticipante(val)
    }

    const agregarParticipante=()=>{
        setEvento({...evento, "participantes":[...evento.participantes, {"nombre":participante, "asiste":false, id:uuidv4()}]})
        setParticipante("")
    }

    const cambiarNombreEvento=(val)=>{
        setEvento({...evento, "nombre":val})
    }

    return (
        <View style={styles.container}>
            {console.log(eventos)}
            <View style={{paddingHorizontal:30}}>
                <Text style={styles.titulo}>Evento</Text>
                <TextInput 
                    placeholder="Nombre" 
                    onChangeText={(val)=>cambiarNombreEvento(val)}
                    style={styles.textInput}/>
                    </View>
            <View style={styles.participantesContainer}>
                <Text style={styles.titulo}>Participantes</Text>
                <FlatList  data={evento.participantes}
                    renderItem={(object) => <View style={{justifyContent:"center"}}><Text style={styles.lista}>{object.item.nombre}</Text></View>}>

                </FlatList>

            </View>
            <View style={styles.nuevoParticipanteContainer}>
                <View style={{ flex: 1, flexDirection: "row", alignItems:"center" }}>
                    <View style={{ flex: 4, justifyContent:"center" }}>
                        <TextInput 
                            value={participante}
                            style={styles.textInput}
                            placeholder="Nombre"
                            onChangeText={(val)=>handleParticipanteInput(val)}/>
                        
                    </View>
                    <View style={{ flex: 1, justifyContent:"center" }}>
                        <TouchableOpacity
                            style={styles.nuevo}
                            onPress={()=>agregarParticipante()}
                        >
                            +
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Guardar evento" color="#fabe0a" onPress={()=>guardarEvento()}/>
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
