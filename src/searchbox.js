import React from 'react';
import 'tachyons';
const Searchbox=({searchField, searchChange}) =>{
    return(
        <div>
            <input
                className='pa3 ba b--green bg lighest-blue' 
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}
export default Searchbox;