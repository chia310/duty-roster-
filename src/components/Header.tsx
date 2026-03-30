import React from 'react';

interface HeaderProps {
  currentDateDisplay: string;
  onEditClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentDateDisplay, onEditClick }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className="bg-indigo-600 p-3 rounded-xl text-white shadow-lg shadow-indigo-100">
          <i className="fa-solid fa-calendar-check text-2xl"></i>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">每週值日生系統</h1>
          <p className="text-slate-500 font-medium">{currentDateDisplay}</p>
        </div>
      </div>
      
      <button 
        onClick={onEditClick} 
        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white transition-all rounded-xl font-medium shadow-md shadow-slate-200 active:scale-95"
      >
        <i className="fa-solid fa-pen-to-square"></i> 編輯名單
      </button>
    </header>
  );
};
