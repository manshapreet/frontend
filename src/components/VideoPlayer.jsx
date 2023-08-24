import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
export const VideoPlayer= ({fn})=>{
    // console.log('song?', item);
    console.log(process.env.REACT_APP_PLAY)
    useEffect(()=>{
 const fn =async()=>{
    try{

        const playUrl = await axios.get(process.env.REACT_APP_PLAY);
        // console.log('resp',response);

        console.log(' ###### url',playUrl);
    } catch(err){ 
  console.log('err',err);
    }
 }
 fn();
    },[])
  //  const divstyle={height:'100px'};

    return (
    <div className='container' >
         {/* <button onClick={()=> {
            fn(false,null);
        }} className="btn btn-success"> back </button>
         */}
     
      {/* <CardMedia
        // component="img"
        // height="15"
        // image={item.artworkUrl100}       
        //  alt={item.Name}
      />
     */}
      <video controls>
        <source src={process.env.REACT_APP_PLAY} type="video/mp4"/>
        {/* <source src={} type="video/mp4"/> */}
        </video>
       
        </div>
      
      
        )
}