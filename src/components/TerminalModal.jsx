import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';
import { personalInfo, terminalCommands } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Welcome to ${personalInfo.name || "Developer"}'s Interactive Portfolio CLI v2.4.0\nType "help" to view available commands or click quick action buttons below.`
    }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'sudo hire' || trimmed === 'hire') {
      newHistory.push({
        type: 'output',
        text: `[OFFER OVERRIDE] EXECUTING RECRUITMENT PIPELINE...\nCongratulations! You've unlocked direct contact.\nEmail direct proposal to: ${personalInfo.email}`
      });
    } else if (terminalCommands[trimmed]) {
      newHistory.push({
        type: 'output',
        text: terminalCommands[trimmed]
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "help" to see valid commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const runQuickCmd = (cmd) => {
    handleCommand(cmd);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-[#0d0b0a] border-2 border-[#cf492c] rounded-lg shadow-2xl overflow-hidden hard-shadow glow-box flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-[#13100e] px-4 py-3 border-b border-[#cf492c]/40 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="font-mono text-xs font-bold text-gray-300 flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#cf492c]" />
            <span>bash - {personalInfo.name.toLowerCase().replace(/\s+/g, '_')}@portfolio:~</span>
          </div>

          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 bg-[#080706]">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.type === 'input' && (
                <div className="text-[#cf492c] font-semibold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-gray-400 whitespace-pre-wrap border-l-2 border-[#cf492c] pl-3 py-1 bg-[#13100e]/50 rounded-r">
                  {item.text}
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-emerald-400 whitespace-pre-wrap pl-2 leading-relaxed">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400 pl-2">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#13100e] border-t border-white/10 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-gray-500 shrink-0">Quick Cmds:</span>
          {['help', 'bio', 'skills', 'experience', 'projects', 'publications', 'certs', 'contact', 'sudo hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => runQuickCmd(cmd)}
              className="px-2.5 py-1 bg-[#090807] hover:bg-[#cf492c] text-gray-300 hover:text-black border border-[#cf492c]/30 rounded transition-all shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleSubmit} className="bg-[#090807] px-4 py-3 border-t border-[#cf492c]/40 flex items-center gap-2">
          <span className="text-[#cf492c] font-mono font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command (e.g. 'skills', 'projects', 'help')..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-gray-600"
          />
          <button
            type="submit"
            className="p-1.5 bg-[#cf492c] text-black font-bold rounded hover:bg-[#e65637] transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
