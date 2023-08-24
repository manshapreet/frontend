import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from "react";
export const Item= ({fn, item})=>{
    console.log(item);
    const [playerFlag,setPlayerFlag ]=useState(false);
    
    const showPlayer=()=>
   { fn(true, item);

}

    return( <>

        <Card sx={{ maxWidth: 200 ,
                    minWidth:200,
                    margin:2}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="150px"
        max-width="150px"
        image={item.artworkUrl100}       
         alt={item.Name}
         
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize={'20px'}>
        {item?.artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={'20px'}>
          {item?.title}
        </Typography>
        
        <div style={{color:'black', 'margin-bottom':35 ,'margin-top':10 }}>
            <button onClick={showPlayer} className='btn btn-primary' style={{backgroundColor:'brown', alignItems:'bottom'}}>
            <i class="fa-solid fa-play"></i> Play

            </button>
            </div>
      </CardContent>
    </CardActionArea>
  </Card>
       
        {/* // <div className="row">
        //     <div className="col-2" style={{color:'black' }}>
        //         <img src={item.artworkUrl100}/>
                
        //     </div>
        //     <div className="col-6" style={{color:'black',
        //                                    border:'#52B640' 
        //                                    }}>
        //     {item.artistName}{item.trackName}
        //     </div> */}
            


    </>
    )

}