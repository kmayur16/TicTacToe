import React from 'react';
/* function Greet() {
    return <h1> hello mayur</h1>
} */

const Greet =(props) => {
    const {name,heroName}= props
   return (
       <div>
            <h1>hello {name} a.k.a {heroName}</h1>
            
       </div>
   )
   
}

export default Greet;