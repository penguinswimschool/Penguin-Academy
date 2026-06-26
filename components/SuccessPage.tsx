import React from 'react';
import { CheckCircle, Home, Receipt } from 'lucide-react';

interface SuccessPageProps {
  onBackToHome: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-green-100">Thank you for your purchase</p>
        </div>

        <div className="p-8 text-center">
          <div className="mb-8">
            <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Confirmed</h2>
            <p className="text-gray-600">
              Your payment has been processed successfully. You will receive a confirmation email shortly.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={onBackToHome}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;