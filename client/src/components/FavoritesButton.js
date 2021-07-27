import React from 'react'
import App from '../App';
import { constellation } from '../services/favorites'


export default function FavoritesButton(props){

const { selectedPic } = props;
let Id 
if(props.user){
  Id = props.user._id
}
console.log(Id)

function handleSave(){
  
    constellation(Id, selectedPic)
    .then((res)=>{
      console.log(res)
    })

}


return(
<div> 
  <button onClick={handleSave}>
  Add to My Constellation
  </button>
</div>
)
}