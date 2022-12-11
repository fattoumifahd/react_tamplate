import React, {  } from 'react';
import { Mycontext } from '../App';


const Default = () => {
    return (
        <Mycontext.Consumer>
        {data => 
        <>
        
        <thead>

        <tr>
            <td>NOM</td>
            <td>Prenom</td>
            <td>ID</td>
            <td>Groupe</td>
        </tr>
        </thead>
        <tbody>
            {data.map((val => {
                return (
                    <tr key={val.id}>
                    <td>{val.nom}</td>
                    <td>{val.prenom}</td>
                    <td>{val.id}</td>
                    <td>{val.groupe}</td>
                </tr>
                )
            }))}
        </tbody>
        
    </>
        }
{/* 
    
        {
            
        data.map((stag => {
            return (
                <tr key={stag.id}>
            <td>{stag.nom}</td>
            <td>{stag.prenom}</td>
            <td>{stag.note}</td>
            <td>{stag.groupe}</td>
        </tr>
        ) */}
        
    {/* }))
    }

        </tbody> */}
        </Mycontext.Consumer>
    );
}

export default Default;
