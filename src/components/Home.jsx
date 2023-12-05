import React, { useContext } from 'react'
import { Cxt } from '../Context'
import SingleProduct from './SingleProduct'



const Home = () => {
  
     const { products } = useContext(Cxt);
   return (
     <div style={{ textAlign: 'center' }}>
       <span style={{ fontSize: 30 }}>Products Page</span>
       <div className="productContainer">
         {products.map(prod => (
           <SingleProduct prod={prod} key={prod.id} />
         ))}
       </div>
     </div>
   );

}

export default Home
