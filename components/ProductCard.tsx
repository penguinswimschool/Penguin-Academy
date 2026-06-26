import React, { useState } from 'react';
import { StripeProduct } from '@/lib/stripe-config';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { createCheckoutSession } from '@/lib/stripe';

interface ProductCardProps {
  product: StripeProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = window.location.href;
      
      await createCheckoutSession(product.priceId, product.mode, successUrl, cancelUrl);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setLoading(false);
    } finally {
      // Don't set loading to false here as we're redirecting
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          S$1.00
        </div>
        <button
          onClick={handlePurchase}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ShoppingCart className="h-4 w-4" />
          )}
          {loading ? 'Processing...' : 'Purchase'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;