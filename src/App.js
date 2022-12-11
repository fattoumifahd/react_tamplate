import './App.css';
import {v4 } from 'uuid';
import  { useState, createContext } from 'react';
import HierNote  from './components/HierNote';
import AllGroupes  from './components/AllGroupes';
import Default from './components/Default';
import AddStagiaire from './components/AddStagiaire';


let stagiaires = [
  {nom : 'fattoumi' , prenom : 'fahd' , id: v4() , groupe : "DDOWFS 202" , note:17.19 },
  {nom : 'fattoumi' , prenom : 'sadd' , id: v4() , groupe : "DDOWFS 202" , note:16.25 },
  {nom : 'dendouni' , prenom : 'yussra' , id: v4() , groupe : "TD 201" , note:14.25 },
  {nom : 'hafsa' , prenom : 'hind' , id: v4() , groupe : "TI 201" , note:18.00 },
  {nom : 'chaari ' , prenom : 'aya' , id: v4() , groupe : "DDOWFS" , note:17.97 },
  {nom : 'yaniq ' , prenom : 'ahmed' , id: v4() , groupe : "DDOWFS" , note:13.97 },
  {nom : 'amrabt' , prenom : 'soufyan' , id: v4() , groupe : "TD 200" , note:13.97 },
  {nom : 'ounahi' , prenom : 'azdin' , id: v4() , groupe : "DDOWFS" , note:10.97 },
];
export const Mycontext = createContext();
function App() {
  const [drp ,setDrp] = useState(false);
  const [note , setNote] = useState(false);
  const [aces , setAces] = useState(false)
  // const showGroup = () => {
  //   setDrp(true)
  //   setNote(false)
  // } 
  // const hierNote =() =>{
  //   setNote(true)
    
  //   let max = 17
  //   let result = stgiaires.filter((stag => (stag.note >= max)))
  //   return result
  // }
  // console.log(hierNote().map((stag => (`${stag.nom} ${stag.prenom} ${stag.note}`))))
  return (
    <div className="App">
        <Mycontext.Provider value={stagiaires}>
      <table border="1">

            { 
            drp === false & note ===false & aces===false ?
            <Default /> : 
            drp=== true & note===false & aces=== false ?
            <AllGroupes  /> : drp ===true & note === true & aces===false ?

            <HierNote/>  : null
          }
        
      </table>
          <AddStagiaire /> 
      <button onClick={()=>{setDrp(true) ; setNote(false)}} >SHOW THE Groupe</button>
      <button onClick={()=>{setDrp(true) ; setNote(true)}}>Hier Note</button>
      <button onClick={()=>{setDrp(false);setNote(false)}} >All stagiaire</button>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
