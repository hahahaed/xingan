import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, content: '你好！我是星安，你的AI助手。', sender: 'ai' },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    const newMessages = [
      ...messages,
      { id: messages.length + 1, content: inputValue, sender: 'user' },
      { id: messages.length + 2, content: `正在思考中...`, sender: 'ai' },
    ]
    setMessages(newMessages)
    setInputValue('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h1 className="text-xl font-bold text-gray-800">星安 AI Companion</h1>
            <p className="text-sm text-gray-500">Proactive Learning Engine</p>
          </div>
        </header>
        
        <main className="h-[calc(100vh-200px)] overflow-y-auto p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-4 ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs md:max-w-sm px-4 py-2 rounded-xl ${
                  msg.sender === 'ai'
                    ? 'bg-white shadow-sm text-gray-800'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </main>
        
        <footer className="bg-white border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入消息..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              发送
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App