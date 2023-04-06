import React, { useState } from 'react';

export const MainContent = () => {

    const [value, setValue] = useState('Kiwi Stinkt SEHR dolle...');

    function useStateSetKappa() {
      setValue('KAPPA');
    }

    return (
        <div className="home-content">
          <h4>I hate NIGGERS</h4>
          <button onClick={useStateSetKappa}>Free Candy</button>
          <p>{value}</p>
        </div>
      ) 
}
