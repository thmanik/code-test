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

  const validateForm = () => {
    const info = formData.styleInfo;
    const requiredFields = [
      'companyName', 'item', 'styleNumber', 'season', 
      'year', 'status', 'department', 'termsOfSales', 
      'division', 'costingBy', 'currency'
    ];

    for (let field of requiredFields) {
      if (!info[field] || String(info[field]).trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields in Style Information.',
        icon: 'error',
        confirmButtonText: 'Understood',
        confirmButtonColor: '#ef4444'
      });
      return;
    }

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

        <div className="flex justify-end pt-4 pb-10">
          <button 
            type="submit" 
            className="w-full md:w-auto bg-[#00C2CB] text-white px-12 py-3 rounded shadow-lg font-bold hover:bg-[#00aeb6] transition-all active:scale-95 cursor-pointer uppercase text-xs"
          >
            SAVE ALL DATA
          </button>
        </div>
      </form>
    </div>
  );
}