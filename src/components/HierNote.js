import React from 'react';
import { Mycontext } from '../App';

export default function hierNote() {
  return (
    <Mycontext.Consumer>
        {
        value =>
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
            {value.map((val => {
                return (
                    <tr key={val.id}>
                        <td>{val.nom}</td>
                        <td>{val.prenom}</td>
                        <td>{val.groupe}</td>
                        <td>{val.note}</td>
                    </tr>
                )
            }))}
        </tbody>
        </>
        }
    </Mycontext.Consumer>
  )
}
