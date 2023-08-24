import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react'
import { Search } from '../components/Search.jsx'
import { Items } from '../components/Items.jsx';
import { getItems } from '../Services/api-client.js';
import { Player } from '../components/Player.jsx';
import Login from '../components/login.jsx';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Register from '../components/Register.jsx';
import { VideoPlayer } from '../components/VideoPlayer.jsx';

export const SearchPage = () => {
  
  const [allItems,setItems] = useState([]);
  
  //life cycle
  const[flag,setFlag]=useState(false);
    const [item, setitem]= useState(null);

  const loadItems=async()=>{
     setItems(await getItems('latest Items'));
  }
  useEffect(()=>{
    loadItems();},[])

  const togglePlayer=(flag,itemarg)=>{
    setitem(itemarg);
      setFlag(flag);
    }
  const getName = async(Name)=>{
    console.log('Name',Name);
    setItems(await getItems(Name));
  }
  const [islogin, setIslogin] = useState(false);

  const loginButtonClick = () => {
    setIslogin(!islogin); // Toggle the state
    
  };
  const [isregister ,setIsregister] = useState(false);

  const registerButtonClick = () => {
    setIsregister(!isregister); // Toggle the state
    
  };
  const [isVidplay ,setIsVidplay] = useState(false);

  const VideoButtonPlayer = () => {
    setIsVidplay(!isVidplay); // Toggle the state
    
  };
  const jsx=<>
  <Search fn={getName}/>
  <Items fn={togglePlayer} allItems ={allItems} />
  </>
  
  return ( 
    <>
   
    <div className='container'>
      
               
    <h1 
           style = {{ backgroundColor:'#009999',
           color:'white',
           textAlign:'center',
           fontSize:50}}>  <i class="fa-brands fa-spotify fa-beat"></i>  PlayView   </h1>
            <div class="container">
              <div class="row">
                <div class= "col-4">
      <button color="fffff" onClick={loginButtonClick}><LoginIcon/></button>
      {islogin && <Login />}
      </div>
    
    <div class= "col-4">
    <button color="fffff" onClick={registerButtonClick}><AppRegistrationIcon/></button>
      {isregister&& <Register/>}

    </div>
    </div>
    </div>
    <br />
    <br />
    <div class='row'>
  <div class= "col-4">
    <button color="fffff" onClick={VideoButtonPlayer}>VIDEO PLAYER</button>
      {isVidplay&& <VideoPlayer fn={togglePlayer} item={item}/>}

      </div>
    
    </div>
        
    {flag?<Player fn={togglePlayer} item={item}/> :jsx}
   
    
    </div>~
    </>
  );
}
