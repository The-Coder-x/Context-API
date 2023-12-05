import React, { useContext } from 'react'
import { Cxt } from '../Context'



const Home = () => {
  
     const { products } = useContext(Cxt);
   return (
     <div style={{ textAlign: 'center' }}>
       <span style={{ fontSize: 30 }}>Products Page</span>
       <div className="productContainer">
         {products.map(prod => (
           <h1> {prod.name} </h1>
           
         ))}
       </div>
     </div>
   );

}

export default Home
