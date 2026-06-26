export interface StripeProduct {
  id: string;
  name: string;
  priceId: string;
  mode: 'payment' | 'subscription';
  description?: string;
}

export const products: StripeProduct[] = [
  {
    id: 'bundle',
    name: 'Penguin Pro Swim Teacher Pathway – Full Certification Bundle',
    priceId: 'price_1Rqt9TDzf62ejFguvuaAcuPu', // Test price ID - replace with real one
    mode: 'payment',
    description: 'Complete certification bundle including all SSI courses'
  },
  {
    id: 'level1',
    name: 'SSI Swim Teacher Level 1 Certification',
    priceId: 'price_1Rqt3gDzf62ejFgu6U9ie1RH', // Test price ID - replace with real one
    mode: 'payment',
    description: 'SSI Level 1 swim teacher certification'
  },
  {
    id: 'level2',
    name: 'SSI Swim Teacher Level 2 Certification',
    priceId: 'price_1Rqt4MDzf62ejFguwt3ow1ro', // Test price ID - replace with real one
    mode: 'payment',
    description: 'SSI Level 2 swim teacher certification'
  },
  {
    id: 'baby',
    name: 'Baby & Me Swim Instructor Course',
    priceId: 'price_1Rqt4uDzf62ejFguYRC2oBzm', // Test price ID - replace with real one
    mode: 'payment',
    description: 'Baby swim instructor certification'
  },
  {
    id: 'react-right',
    name: 'React Right (CPR, AED, First Aid)',
    priceId: 'price_1Rqt5eDzf62ejFguiDKQK7ec', // Test price ID - replace with real one
    mode: 'payment',
    description: 'CPR, AED, and First Aid certification'
  }
];

export const findProductByName = (name: string): StripeProduct | undefined => {
  return products.find(product => 
    product.name.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(product.name.toLowerCase())
  );
};

export const findProductById = (id: string): StripeProduct | undefined => {
  return products.find(product => product.id === id);
}; 