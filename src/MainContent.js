import React, { useState } from 'react';

function MainContent() {

    const [value, setValue] = useState('Kiwi Stinkt SEHR dolle...');

    function KillYourSelf() {
      setValue('KAPPA');
    }

    return (
        <div className="home-content">
          <h4>I hate NIGGERS</h4>
          <button onClick={KillYourSelf}>Free Candy</button>
          <p>{value}</p>
        </div>
      ) 
}

export default MainContent;