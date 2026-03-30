import React from 'react';

export const RulesBoard: React.FC = () => {
  return (
    <div className="chalkboard rounded-2xl p-8 text-white relative">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/20 pb-4">
        <span className="w-4 h-4 bg-yellow-300 rounded-full"></span> 
        值日生守則 (每週任務)
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
            <div className="flex gap-4">
                <span className="text-yellow-300 font-bold text-xl">01</span>
                <p className="text-slate-100 leading-relaxed">早上 07:30 前完成基本打掃與黑板清理。</p>
            </div>
            <div className="flex gap-4">
                <span className="text-yellow-300 font-bold text-xl">02</span>
                <p className="text-slate-100 leading-relaxed">每節下課後確認講台整潔。</p>
            </div>
        </div>
        <div className="space-y-4">
            <div className="flex gap-4">
                <span className="text-yellow-300 font-bold text-xl">03</span>
                <p className="text-slate-100 leading-relaxed">放學前確認垃圾已清空，窗戶已鎖好。</p>
            </div>
            <div className="flex gap-4">
                <span className="text-yellow-300 font-bold text-xl">04</span>
                <p className="text-slate-100 leading-relaxed">週五放學時進行額外的大掃除項目。</p>
            </div>
        </div>
      </div>
    </div>
  );
};
