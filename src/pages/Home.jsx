/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import StyleInfoSection from '../components/StyleInfo';
import Credential from '../components/Credential';
import FabricCost from '../components/FabricCost';
import TrimCost from '../components/TrimCost';
import AccessoriesCost from '../components/AccessoriesCost';
import ApplicationCost from '../components/ApplicationCost';
import CostOfManufacturing from '../components/CostOfManufacturing';

export default function Home() {
  const [formData, setFormData] = useState({
    styleInfo: {},
    credentials: [{ id: 1, type: 'TIN', value: '', courierAcc: '', carrier: '', source: '', accessTo: '' }],
    fabricCosts: [{ id: 1, ref: '', name: '', unit: '', price: 0, total: 0 }],
    trimCosts: [{ id: 1, ref: '', name: '', unit: '', qty: '', price: '', excs: '', total: 0 }],
    accessoriesCosts: [{ id: 1, ref: '', name: '', unit: '', qty: '', price: '', excs: '', total: 0, depend: 'DTM' }],
    applicationCosts: [{ id: 1, ref: '', name: '', type: '', placement: '', category: '', price: '' }],
    cmCosts: [{ id: 1, name: '', price: '' }],
  });

  const [finalSubmission, setFinalSubmission] = useState(null);

  const updateSection = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFinalSubmission(formData);

    Swal.fire({
      title: 'Success!',
      text: 'Data has been captured and stored in state.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4338ca',
      timer: 2000
    });
  };

  return (
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

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="w-full md:w-auto bg-[#00C2CB] text-white px-12 py-3 rounded shadow-lg font-bold hover:bg-blue-700 transition-all active:scale-95 cursor-pointer uppercase"
          >
            SAVE ALL DATA
          </button>
        </div>

        {/* {finalSubmission && (
          <div className="p-4 bg-green-50 border border-green-200 rounded shadow-sm">
            <h3 className="font-bold text-green-700 mb-2 text-sm uppercase">Final Submitted State:</h3>
            <pre className="text-[10px] md:text-xs bg-white p-3 rounded border overflow-auto max-h-64 text-slate-700">
              {JSON.stringify(finalSubmission, null, 2)}
            </pre>
          </div>
        )} */}
      </form>
    </div>
  );
}