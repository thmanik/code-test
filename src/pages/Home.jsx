import React, { useState } from 'react';
import StyleInfoSection from '../components/StyleInfo';
import Credential from '../components/Credential';
import FabricCost from '../components/FabricCost';
import TrimCost from '../components/TrimCost';
import AccessoriesCost from '../components/AccessoriesCost';
import ApplicationCost from '../components/ApplicationCost';
import CostOfManufacturing from '../components/CostOfManufacturing'; // 7th Component

export default function Home() {
  const [formData, setFormData] = useState({
    styleInfo: {},
    credentials: [{ id: 1, type: 'TIN', value: '', courierAcc: '', carrier: '', source: '', accessTo: '' }],
    fabricCosts: [{ id: 1, ref: '', name: '', unit: '', price: 0, total: 0 }],
    trimCosts: [{ id: 1, ref: '', name: '', unit: '', qty: '', price: '', excs: '', total: 0 }],
    accessoriesCosts: [{ id: 1, ref: '', name: '', unit: '', qty: '', price: '', excs: '', total: 0, depend: 'DTM' }],
    applicationCosts: [{ id: 1, ref: '', name: '', type: '', placement: '', category: '', price: '' }],
    cmCosts: [{ id: 1, name: '', price: '' }], // CM State
  });

  const updateSection = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Successfully Captured Form Data:", formData);
    alert("Success! Data has been captured.");
  };

  return (
    // Mobile-er jonno p-3 ebong desktop-er jonno p-6
    <div className="p-3 md:p-6 bg-slate-50 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
        
        <StyleInfoSection 
          data={formData.styleInfo} 
          onUpdate={(val) => updateSection('styleInfo', val)} 
        />
        
        <Credential 
          list={formData.credentials} 
          onUpdate={(val) => updateSection('credentials', val)} 
        />

        {/* Shob component-er vitor overflow-x-auto thakay era phone-e auto scroll hobe */}
        <FabricCost 
          rows={formData.fabricCosts} 
          onUpdate={(val) => updateSection('fabricCosts', val)} 
        />

        <TrimCost 
          rows={formData.trimCosts} 
          onUpdate={(val) => updateSection('trimCosts', val)} 
        />

        <AccessoriesCost 
          rows={formData.accessoriesCosts} 
          onUpdate={(val) => updateSection('accessoriesCosts', val)} 
        />

        <ApplicationCost 
          rows={formData.applicationCosts} 
          onUpdate={(val) => updateSection('applicationCosts', val)} 
        />

        <CostOfManufacturing 
          rows={formData.cmCosts} 
          onUpdate={(val) => updateSection('cmCosts', val)} 
        />

        {/* Action Button: Mobile-e width full thakbe */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="w-full md:w-auto bg-blue-600 text-white px-12 py-3 rounded shadow-lg font-bold hover:bg-blue-700 transition-all active:scale-95 cursor-pointer uppercase"
          >
            SAVE ALL DATA
          </button>
        </div>

        {/* Debug Preview: Mobile-e scrollable kora hoyeche */}
        <div className="p-4 bg-white border rounded shadow-sm">
          <h3 className="font-bold text-red-500 mb-2 text-sm uppercase">Live State Preview:</h3>
          <pre className="text-[10px] md:text-xs bg-gray-50 p-3 rounded border overflow-auto max-h-64 text-slate-700">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </form>
    </div>
  );
}