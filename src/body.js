import React, { useState } from 'react';

function Body() {

    useState();
    
    const estado = useState(0);
    let contador = estado[0];
    const unaFuncion = estado[1];

    let handleClick = () => {
        unaFuncion(contador + 1);
    }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>Contador: {contador}</p>
      </>
  );
}

export default Body;