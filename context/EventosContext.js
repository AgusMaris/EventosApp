import React, { createContext, useState, useEffect } from 'react'
import { uuidv4 } from '../screens/NewEventScreen';

const EventosContext=createContext();

export default EventosContext

export const EventosContextProvider = (props)=>{
    const [eventos, setEventos] = useState([]);

    function agregarNuevoEvento(evento){
        //actualiza
        if(evento?.id){
            setEventos([...eventos.filter(e=>{
                return e.id!=evento.id
            }), evento])
        }else{
            evento.id=uuidv4()
            setEventos([...eventos, evento]);
        }
    }

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