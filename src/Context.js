import React, { createContext, useState } from 'react';
import { faker } from '@faker-js/faker';
faker.seed(100);
export const Cxt = createContext();
const Context = ({children}) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  const [products] = useState(productArray);
  const [cart,setCart] = useState([]);


  
  return <Cxt.Provider value={{products,cart,setCart}}>
    {children}
  </Cxt.Provider>;
};

export default Context;
