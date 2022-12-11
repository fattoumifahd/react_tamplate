import React from 'react';
import { Mycontext } from '../App';
let result 
let max = 17 
export default function hierNote() {
  return (
    <Mycontext.Consumer>
        {
        data =>
        <>
        <thead>
        <tr>
            <td>Nom </td>
            <td>Prenom </td>
            <td>Groupe </td>
            <td>Note</td>
        </tr>
        </thead>
        <tbody>
            {
                result = data.filter((val => (val.note >= max))).map((val => {
                    return (
                        <tr key={val.id}>
                            <td>{val.nom}</td>
                            <td>{val.prenom}</td>
                            <td>{val.groupe}</td>
                            <td>{val.note}</td>
                        </tr>
                    )
                }))
                }
                {/* {
                
            result.map((val => {
                return (
                    <tr key={val.id}>
                        <td>{val.nom}</td>
                        <td>{val.prenom}</td>
                        <td>{val.groupe}</td>
                        <td>{val.note}</td>
                    </tr>
                )
            }))
            } */}
        </tbody>
        </>
        }
    </Mycontext.Consumer>
  )
}
