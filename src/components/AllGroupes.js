import React from 'react';
import { Mycontext } from '../App';

export default function allGroupes() {
  return (
    
        <Mycontext.Consumer>
            {
                value => 
                    <>
                    <thead>
                        <tr>
                            <td>Groupe</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            value.map((val => {
                                return (
                                    <tr key={val.id}>
                                        <td>{val.groupe}</td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>
                    </>
                
            }
        </Mycontext.Consumer>
  )
}
