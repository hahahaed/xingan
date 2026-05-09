# 星安 (XingAn)

An intelligent AI companion system with **proactive learning capabilities** that autonomously acquires knowledge and delivers context-aware responses.

## 🌟 Core Features

### 🧠 Proactive Learning Engine
- **Interest Detection**: Automatically identifies user learning intentions from conversational context
- **Knowledge Acquisition**: Performs autonomous web searches and knowledge structuring during idle periods
- **Memory Management**: Intelligent storage and retrieval system with semantic relevance ranking

### 💬 Natural Conversation Interface
- **Contextual Awareness**: Maintains long-term conversation history and context
- **Knowledge Recall**: Proactively mentions relevant knowledge at appropriate moments
- **Adaptive Responses**: Dynamic response generation based on user preferences and interaction history

### 📊 Learning Visualization
- **Progress Tracking**: Real-time display of ongoing learning tasks
- **Knowledge Graph**: Visual representation of acquired knowledge relationships
- **Performance Analytics**: Learning efficiency metrics and improvement suggestions

## 🛠️ Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer                          │
│  React 18 + TypeScript + Vite + TailwindCSS               │
├─────────────────────────────────────────────────────────────┤
│                    API Gateway                             │
│  FastAPI 0.104 + Uvicorn + WebSocket                      │
├─────────────────────────────────────────────────────────────┤
│                    Core Services                           │
│  ├── IntentAnalyzer    (意图分析引擎)                      │
│  ├── KnowledgeProcessor (知识处理模块)                     │
│  ├── MemoryRetriever   (记忆检索系统)                     │
│  └── TimingJudge       (时机判断模块)                     │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer                              │
│  SQLite (structured data) + ChromaDB (vector embeddings)  │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/hahahaed/星安.git
cd 星安

# Backend setup
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
python main.py

# Frontend setup (in new terminal)
cd frontend
npm install
npm run dev
```

## 📋 Requirements

| Component | Version |
|-----------|---------|
| Python | >= 3.10 |
| Node.js | >= 18.0 |
| FastAPI | >= 0.100 |
| React | >= 18.0 |
| ChromaDB | >= 0.4 |

## 🔧 Configuration

```yaml
# backend/config/config.yaml
server:
  host: 0.0.0.0
  port: 8000
  cors_origins:
    - http://localhost:3000
    - http://localhost:5173

memory:
  chroma_path: ./data/chroma
  embedding_model: all-MiniLM-L6-v2
  retrieval_top_k: 5

learning:
  max_search_results: 10
  idle_threshold_minutes: 15
  knowledge_expiry_days: 30
```

## 📁 Project Structure

```
星安/
├── backend/                  # FastAPI backend
│   ├── main.py              # Entry point
│   ├── routers/             # API endpoints
│   ├── core/                # Business logic
│   ├── config/              # Configuration files
│   └── requirements.txt     # Dependencies
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # Page views
│   │   └── services/        # API services
│   └── package.json
├── data/                    # Data storage
├── docs/                    # Documentation
└── tests/                   # Test suite
```

## 🧪 Testing

```bash
# Run backend tests
cd backend
pytest tests/ -v

# Run frontend tests
cd frontend
npm test

# Integration tests
python tests/test_integration.py
```

## 📈 Performance

- **Response Time**: < 500ms for standard queries
- **Memory Usage**: Optimized for long-running sessions
- **Scalability**: Supports concurrent user sessions

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add your feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by the XingAn Development Team*