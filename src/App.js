import './App.css';
import {v4 } from 'uuid';
import  { useState, createContext } from 'react';
import HierNote  from './components/HierNote';
import AllGroupes  from './components/AllGroupes';
import Default from './components/Default';
// import AddStagiaire from './components/AddStagiaire';


// let stagiaires = [
//   {nom : 'fattoumi' , prenom : 'fahd' , id: v4() , groupe : "DDOWFS 202" , note:17.19 },
//   {nom : 'fattoumi' , prenom : 'sadd' , id: v4() , groupe : "DDOWFS 202" , note:16.25 },
//   {nom : 'dendouni' , prenom : 'yussra' , id: v4() , groupe : "TD 201" , note:14.25 },
//   {nom : 'hafsa' , prenom : 'hind' , id: v4() , groupe : "TI 201" , note:18.00 },
//   {nom : 'chaari ' , prenom : 'aya' , id: v4() , groupe : "DDOWFS" , note:17.97 },
//   {nom : 'yaniq ' , prenom : 'ahmed' , id: v4() , groupe : "DDOWFS" , note:13.97 },
//   {nom : 'amrabt' , prenom : 'soufyan' , id: v4() , groupe : "TD 200" , note:13.97 },
//   {nom : 'ounahi' , prenom : 'azdin' , id: v4() , groupe : "DDOWFS" , note:10.97 },
// ];
export const Mycontext = createContext();
function App() {
  const [drp ,setDrp] = useState(false);
  const [note , setNote] = useState(false);
  const [aces , setAces] = useState(false)
  const [add , setAdd] = useState({})
  const [stags , setStags] = useState([ 
    {nom : 'dendouni' , prenom : 'yussra' , id: v4() , groupe : "TD 201" , note:14.25 },
    {nom : 'hafsa' , prenom : 'hind' , id: v4() , groupe : "TI 201" , note:18.00 },
    {nom : 'chaari ' , prenom : 'aya' , id: v4() , groupe : "DDOWFS" , note:17.97 },
    {nom : 'yaniq ' , prenom : 'ahmed' , id: v4() , groupe : "DDOWFS" , note:13.97 },
    {nom : 'amrabt' , prenom : 'soufyan' , id: v4() , groupe : "TD 200" , note:13.97 },
    {nom : 'ounahi' , prenom : 'azdin' , id: v4() , groupe : "DDOWFS" , note:10.97 }
  ]
  )
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
        <Mycontext.Provider value={stags}>
      <table border="1">

            { 
            drp === false & note ===false & aces===false ?
            <Default /> : 
            drp=== true & note===false & aces=== false ?
            <AllGroupes  /> : drp ===true & note === true & aces===false ?
            <HierNote/> : null 
            
          }
          </table>
          {
          drp ===true & note === true & aces===true?
          <div>
            <input type='text' name='nom' placeholder='Nom' onChange={(e)=>{setAdd({ ...add , [e.target.name] : e.target.value })}}  />
                <input type='text' name='prenom' placeholder='Prenom' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value , id : v4()})}}  />
                <input type='text' name='groupe' placeholder='Groupe' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value})}}  />
                <input type='number' name='note' placeholder='Note' onChange={(e)=>{setAdd( {...add , [e.target.name] : e.target.value})}}  />
                <button onClick={()=> {
                // setAdd({...add , ['id'] : v4()})
                setStags([...stags , add]) ; 
                setAces(false) ; 
                setDrp(false) ; 
                setNote(false) 
                }}>Add stagiaire</button><br/>
          </div>: null
          }
      <button onClick={()=>{setDrp(true) ; setNote(false)}} >SHOW THE Groupe</button>
      <button onClick={()=>{setDrp(true) ; setNote(true)}}>Hier Note</button>
      <button onClick={()=>{setDrp(false);setNote(false)}} >All stagiaire</button><br/>
      <p style={{textDecoration : 'underline' , color : 'blue' , cursor : 'pointer'}} onClick={()=> {setDrp(true); 
        setAces(true);
        setNote(true);
        }}>ADD stagiaire</p>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
