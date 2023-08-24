import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
export const Player=({fn ,item})=>{
    console.log('song?', item);
    return (
    <Container maxWidth="sm"> 
<br/>
         <button onClick={()=> {
            fn(false,null);
        }} className="btn btn-success"> back </button>
        
        <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="auto"
        image={item.artworkUrl100}       
         alt={item.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item?.artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
       

        <audio controls>
        <source src={item?.previewUrl} type="audio/mp4"/>
        </audio>
       
        </Container>
        )
}