import React from 'react';

const Cards = (props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 na2 grow bw2 shadow-5'>
            <img alt="Heloooo!" src={`https://robohash.org/${props.id}?200x200`} />
            <p>{props.name}</p>
            <p>{props.email}</p>
            
        </div>
    );
}

export default Cards;