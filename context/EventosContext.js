import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react'
import uuidv4 from '../utils/uuidv4'

export const storeEventos = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(`value: ${value} jsonValue: ${jsonValue}`)
      await AsyncStorage.setItem('eventos', jsonValue);
    } catch (e) {
      // saving error
      console.log(e)
    }
  }
  
  export const getEventos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('eventos')
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
    }
  }

const EventosContext=createContext();

export default EventosContext

export const EventosContextProvider = (props)=>{
    const [eventos, setEventos] = useState([]);

    function agregarNuevoEvento(evento){
        var eventosActualizados=[]
        //actualiza
        if(evento?.id){
            eventosActualizados=[...eventos.filter(e=>{
                return e.id!=evento.id
            }), evento]
            setEventos(eventosActualizados)
        }else{
            evento.id=uuidv4()
            eventosActualizados=[...eventos, evento]
            setEventos(eventosActualizados);
        }
        storeEventos(eventosActualizados);
    }
    
    async function cargarEventos(){
        const eventos=await getEventos();
        setEventos(eventos)
    }

    useEffect(()=>{
        cargarEventos();
    },[])

    function traerEventoId(id){
        const evento=eventos.filter(e=>{
            return e.id==id
        })[0]
        console.log(`evento con id:${id}: ${evento}`) 
        return evento
    }

    return(
        <EventosContext.Provider value={{
            eventos:eventos,
            agregarNuevoEvento:(e)=>agregarNuevoEvento(e),
            traerEventoId:(id)=>traerEventoId(id)
        }}>
            {props.children}
        </EventosContext.Provider>
    )

}