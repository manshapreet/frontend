import {useRef} from "react";
export const Search =({fn}) =>{

    const Name=useRef();

    return (
        <>
        <label style={{
                        border:'2px solid green',
                        color:'#009999' ,
                        backgroundColor:'white',
                        fontStyle:'bold',
                        padding:'4px',
                        'margin-top':20,
                        'marging-bottom':20
                        
                        
                        
        }}> Hello welcome to PlayView </label>
        
        <input ref={Name}type='text' className='form-control' placeholder='Search A Song' 
          style={{ border:'4px solid pink' ,
                   'margin-top':20
                   
                   }}/>
        
        <button className="btn btn-success" onClick={()=>{
            fn(Name.current.value);}}   style={{'margin-top':20 , 'margin-bottom':20}}> Search <i class="fa-solid fa-magnifying-glass"> </i> </button>
       
       </>
    );
}