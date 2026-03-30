import React from 'react';

interface CurrentDutyProps {
  weekRangeDisplay: string;
  currentStudentName: string;
}

export const CurrentDuty: React.FC<CurrentDutyProps> = ({ weekRangeDisplay, currentStudentName }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative">
      <div className="bg-indigo-600 py-4 px-6 text-white text-center">
        <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-1">Current Week</div>
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <i className="fa-solid fa-calendar-days"></i> {weekRangeDisplay}
        </div>
      </div>
      
      <div className="p-12 text-center flex flex-col items-center justify-center min-h-[350px]">
        <div className="relative mb-8">
          <div className="w-40 h-40 bg-indigo-50 rounded-full flex items-center justify-center border-4 border-indigo-100">
            <i className="fa-solid fa-users text-5xl text-indigo-600"></i>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold">
            ★
          </div>
        </div>
        
        <h2 className="text-2xl text-indigo-500 font-bold mb-2">本週負責人</h2>
        <div className="text-8xl font-black text-slate-900 mb-6 tracking-tight">
          {currentStudentName}
        </div>
        <p className="bg-slate-100 px-6 py-2 rounded-full text-slate-500 font-bold text-sm">
          請同學主動協助維持環境整潔
        </p>
      </div>
    </div>
  );
};
