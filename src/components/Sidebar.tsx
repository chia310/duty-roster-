import React from 'react';

export interface UpcomingDuty {
  range: string;
  name: string;
}

interface SidebarProps {
  upcomingList: UpcomingDuty[];
}

export const Sidebar: React.FC<SidebarProps> = ({ upcomingList }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-4">
          <i className="fa-solid fa-clock-rotate-left text-indigo-600"></i> 接續週次預告
        </h3>
        <div className="space-y-4">
          {upcomingList.map((item, idx) => (
            <div key={idx} className="group relative pl-4 border-l-2 border-slate-100 hover:border-indigo-400 transition-all">
                <div className="text-xs font-bold text-indigo-500 mb-1 flex items-center gap-1">
                    <i className="fa-solid fa-calendar text-[10px]"></i> {item.range}
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 group-hover:bg-indigo-50 transition-colors">
                    <span className="font-bold text-slate-700">{item.name}</span>
                    <i className="fa-solid fa-chevron-right text-xs text-slate-300 group-hover:text-indigo-400"></i>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-100 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-xl mb-3">小提醒</h3>
          <p className="text-blue-50 text-sm leading-relaxed opacity-90">
            週次是以每週一作為起始。如果名單中的人數不足，系統會自動循環。若有特殊連假調整，請點擊編輯名單更換順序。
          </p>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};
