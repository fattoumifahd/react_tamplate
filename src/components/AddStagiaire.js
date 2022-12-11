import React, { useState } from 'react';
import { Mycontext } from '../App';
import {v4} from "uuid"
export default function AddStagiaire() {
  const [add , setAdd] = useState({id : v4()});
  const [newVal ,setNewVal] = useState([])

    return (
    <Mycontext.Consumer>
        {
            value =>
            <>
                <input type='text' name='nom' placeholder='Nom' onChange={(e)=>{setAdd({ ...add , [e.target.name] : e.target.value})}}  />
                <input type='text' name='prenom' placeholder='Prenom' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value})}}  />
                <input type='text' name='Groupe' placeholder='Groupe' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value})}}  />
                <input type='number' name='note' placeholder='Note' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value})}}  />
                <button onClick={()=> { 
                    setAdd({...add , 'id' : v4()})
                    value = [...value , add ];
                    setNewVal(value)
                    newVal.forEach(val => (
                         console.log(val)                        
                    ));
                     }}
                     >Add stagiaire</button>
            </>
        }
    </Mycontext.Consumer>
  )
}
