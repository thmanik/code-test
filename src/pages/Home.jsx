import React, { useState } from 'react';
import StyleInfoSection from '../components/StyleInfo';
import Credential from '../components/Credential';
import FabricCost from '../components/FabricCost';
import TrimCost from '../components/TrimCost'; // TrimCost import kora holo

export default function Home() {
  const [formData, setFormData] = useState({
    styleInfo: {},
    credentials: [{ id: 1, type: 'TIN', value: '', courierAcc: '', carrier: '', source: '', accessTo: '' }],
    fabricCosts: [{ id: 1, ref: '', name: '', unit: '', price: 0, total: 0 }],
    trimCosts: [{ id: 1, ref: '', name: '', unit: '', qty: 0, price: 0, total: 0 }],
  });

  const updateSection = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const styleFields = [
      'companyName', 'item', 'status', 'department', 
      'termsOfSales', 'division', 'costingBy', 'currency'
    ];

    const isStyleInfoValid = styleFields.every(
      (field) => formData.styleInfo[field] && formData.styleInfo[field].trim() !== ""
    );

    const isCredentialsValid = formData.credentials.every(
      (c) => c.value && c.value.trim() !== ""
    );

    if (isStyleInfoValid && isCredentialsValid) {
      console.log("Successfully Captured Form Data:", formData);
      alert("Success! Data has been captured.");
    } else {
      alert("Error: Please fill all the red marked fields.");
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
        
        {/* Style Information */}
        <StyleInfoSection
          data={formData.styleInfo} 
          onUpdate={(val) => updateSection('styleInfo', val)} 
        />
        
        {/* Credentials */}
        <Credential 
          list={formData.credentials} 
          onUpdate={(val) => updateSection('credentials', val)} 
        />

        {/* Fabric Cost */}
        <FabricCost 
          rows={formData.fabricCosts} 
          onUpdate={(val) => updateSection('fabricCosts', val)} 
        />

        {/* Trim Cost - Ekhon add kora holo */}
        <TrimCost 
          rows={formData.trimCosts} 
          onUpdate={(val) => updateSection('trimCosts', val)} 
        />

        {/* Action Button */}
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-12 py-3 rounded shadow-lg font-bold hover:bg-blue-700 transition-all active:scale-95 cursor-pointer"
          >
            SAVE ALL DATA
          </button>
        </div>

        {/* Live State Preview */}
        <div className="p-4 bg-white border rounded shadow-sm">
          <h3 className="font-bold text-red-500 mb-2 text-sm uppercase tracking-wider">
            Live Home Page State:
          </h3>
          <pre className="text-xs bg-gray-50 p-3 rounded border overflow-auto max-h-64 text-slate-700">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </form>
    </div>
  );
}