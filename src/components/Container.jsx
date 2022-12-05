import React from 'react';

const Container = ({children}) => {
    return (  
        <div className='content-div'>
            {children}
        </div>
    );
}

export default Container;