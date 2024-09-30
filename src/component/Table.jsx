import React, { useState } from 'react';

const CustomerChurnForm = () => {
  const [formData, setFormData] = useState({
    CreditScore: '',
    Geography: '',
    Gender: '',
    Age: '',
    Tenure: '',
    Balance: '',
    NumOfProducts: '',
    HasCrCard: '0',
    IsActiveMember: '0',
    EstimatedSalary: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSwitch = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? '1' : '0'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/predict', { // Update with your server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md md:max-w-2xl">
        <h1 className="text-4xl font-mono text-center mb-8 text-gray-900">Customer Churn Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Credit Score</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="CreditScore"
              placeholder="Enter your credit score"
              onChange={handleChange}
            />
          </div>

          
          <div className="flex flex-col mb-6">
            <label className="text-gray-700 mb-2 font-bold text-left text-lg">Geography</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="Geography"
              placeholder="Enter your country"
              onChange={handleChange}
            />
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-x-4 mb-2">
            <label className="text-gray-700 font-bold mb-2 md:mb-0 text-left text-lg">Gender</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition w-full md:w-auto"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Age</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="Age"
              placeholder="Enter your age"
              onChange={handleChange}
            />
          </div>

          
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Tenure</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="Tenure"
              placeholder="Enter your tenure"
              onChange={handleChange}
            />
          </div>

          
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Balance</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="Balance"
              placeholder="Enter your balance"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Number of Products</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="NumOfProducts"
              placeholder="Enter number of products"
              onChange={handleChange}
            />
          </div>

          
          <div className="flex md:flex-row gap-x-32">
            <div className="flex items-center space-x-2 px-4 md:px-9 bg-gray-50 rounded-lg shadow-md p-4">
              <label className="text-gray-700">Has Credit Card?</label>
              <input
                type="checkbox"
                name="HasCrCard"
                checked={formData.HasCrCard === '1'}
                onChange={handleSwitch}
                className="h-5 w-5 text-gray-600 focus:ring-purple-300 transition"
              />
            </div>

            <div className="flex items-center space-x-2 px-4 md:px-9 bg-gray-50 rounded-lg shadow-md p-4">
              <label className="text-gray-700">Is Active Member?</label>
              <input
                type="checkbox"
                name="IsActiveMember"
                checked={formData.IsActiveMember === '1'}
                onChange={handleSwitch}
                className="h-5 w-5 text-gray-600 focus:ring-purple-300 transition"
              />
            </div>
          </div>

          
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 text-left text-lg font-bold">Estimated Salary</label>
            <input
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
              name="EstimatedSalary"
              placeholder="Enter estimated salary"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-4 rounded-xl font-semibold hover:bg-purple-700 transition duration-300"
          >
            Predict
          </button>
        </form>

        {result && (
          <h2 className="text-2xl font-medium text-center mt-6 text-gray-900 bg-gray-100 p-6 rounded-xl border border-gray-200">
            Prediction: {result}
          </h2>
        )}
      </div>
    </div>
  );
};

export default CustomerChurnForm;
