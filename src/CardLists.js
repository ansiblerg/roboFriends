import React from 'react';
import Cards from './Cards';

const CardLists = ({robot})=>{
    const cardComponent=robot.map((user,i)=>{
        return < Cards key={i} id={robot[i].id}
                 name={robot[i].name}
                 email={robot[i].email} 
                 />;
    });
    return(
        
        <div>{cardComponent}</div>
    )
}

export default CardLists;