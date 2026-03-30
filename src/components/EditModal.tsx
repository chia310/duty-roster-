import React, { useState, useEffect } from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newList: string[]) => void;
  currentStudents: string[];
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, currentStudents }) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInputText(currentStudents.join('\n'));
    }
  }, [isOpen, currentStudents]);

  if (!isOpen) return null;

  const handleSave = () => {
    const newList = inputText.split('\n').map(n => n.trim()).filter(n => n !== "");
    if (newList.length > 0) {
      onSave(newList);
      onClose();
    } else {
      alert("請至少輸入一個姓名！");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-white/20">
        <div className="p-8 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <i className="fa-solid fa-users-gear text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">編輯學生名單</h2>
            </div>
            <p className="text-slate-400 text-sm">請按順序輸入姓名，每一行一位同學。</p>
        </div>
        <div className="p-8">
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-72 p-4 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all font-mono text-lg resize-none shadow-inner bg-slate-50" 
              placeholder="陳小明&#10;林美玲..."
            ></textarea>
        </div>
        <div className="p-8 bg-slate-50 flex gap-4">
            <button 
              onClick={onClose} 
              className="flex-1 px-4 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-100 transition-all"
            >
                取消
            </button>
            <button 
              onClick={handleSave} 
              className="flex-1 px-4 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
            >
                <i className="fa-solid fa-check"></i> 更新名單
            </button>
        </div>
      </div>
    </div>
  );
};
