from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import asyncio
from datetime import datetime

app = FastAPI(title="星安 AI Companion API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    id: int
    content: str
    sender: str
    timestamp: datetime

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    message: str
    session_id: str

@app.get("/")
async def root():
    return {"message": "星安 AI Companion API is running"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now()}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    await asyncio.sleep(1)
    
    responses = [
        "这是一个很好的问题！让我为你分析一下...",
        "我理解你的想法，让我整理一下思路...",
        "好的，我来帮你解答这个问题。",
        "这个话题很有趣，我来分享一下我的见解...",
        "让我思考一下，然后给你一个详细的回答。",
    ]
    
    import random
    response = random.choice(responses)
    
    return ChatResponse(
        message=response,
        session_id=request.session_id or "default-session"
    )

@app.get("/api/messages", response_model=List[Message])
async def get_messages(limit: int = 10):
    messages = [
        Message(
            id=1,
            content="你好！我是星安，你的AI助手。",
            sender="ai",
            timestamp=datetime.now()
        ),
        Message(
            id=2,
            content="你好！很高兴认识你。",
            sender="user",
            timestamp=datetime.now()
        ),
    ]
    return messages[:limit]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)