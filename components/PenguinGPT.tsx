import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Plus, MessageSquare, ArrowLeft, Trash2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

interface PenguinGPTProps {
  onBack: () => void;
  initialMessage?: string | null;
}

const PenguinGPT: React.FC<PenguinGPTProps> = ({ onBack, initialMessage }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find(chat => chat.id === currentChatId);

  useEffect(() => {
    if (initialMessage) {
      // Create a new chat with the initial message
      const newChat: Chat = {
        id: Date.now().toString(),
        title: generateChatTitle(initialMessage),
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setChats([newChat]);
      setCurrentChatId(newChat.id);
      setInputMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateChatTitle = (firstMessage: string): string => {
    const words = firstMessage.split(' ').slice(0, 6);
    return words.join(' ') + (firstMessage.split(' ').length > 6 ? '...' : '');
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setChats(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  const deleteChat = (chatId: string) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      const remainingChats = chats.filter(chat => chat.id !== chatId);
      setCurrentChatId(remainingChats.length > 0 ? remainingChats[0].id : null);
    }
  };

  const callChatbotAPI = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('https://n8n-production-4025.up.railway.app/webhook/f5129686-fff3-4f77-8088-e9d37565e927/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          action: 'sendMessage',
          chatInput: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.output || "Sorry, I couldn't get a response.";
    } catch (error) {
      console.error('Error calling chatbot API:', error);
      
      // Retry once if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        try {
          console.log('Retrying API call...');
          const retryResponse = await fetch('https://n8n-production-4025.up.railway.app/webhook/f5129686-fff3-4f77-8088-e9d37565e927/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId: sessionId,
              action: 'sendMessage',
              chatInput: userMessage,
            }),
          });

          if (retryResponse.ok) {
            const retryData = await retryResponse.json();
            return retryData.output || "Sorry, I couldn't get a response.";
          }
        } catch (retryError) {
          console.error('Retry also failed:', retryError);
        }
      }
      
      // Fallback response in case of API failure
      return "Sorry, something went wrong. Please try again.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    let chatToUpdate = currentChat;
    
    // If no current chat, create one
    if (!chatToUpdate) {
      const newChat: Chat = {
        id: Date.now().toString(),
        title: generateChatTitle(inputMessage),
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setChats(prev => [newChat, ...prev]);
      setCurrentChatId(newChat.id);
      chatToUpdate = newChat;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    // Update chat with user message
    setChats(prev => prev.map(chat => 
      chat.id === chatToUpdate!.id 
        ? { 
            ...chat, 
            messages: [...chat.messages, userMessage],
            title: chat.messages.length === 0 ? generateChatTitle(inputMessage) : chat.title,
            updatedAt: new Date()
          }
        : chat
    ));

    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await callChatbotAPI(inputMessage);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
      };

      setChats(prev => prev.map(chat => 
        chat.id === chatToUpdate!.id 
          ? { 
              ...chat, 
              messages: [...chat.messages, assistantMessage],
              updatedAt: new Date()
            }
          : chat
      ));
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: "Sorry, something went wrong. Please try again.",
        role: 'assistant',
        timestamp: new Date(),
      };

      setChats(prev => prev.map(chat => 
        chat.id === chatToUpdate!.id 
          ? { 
              ...chat, 
              messages: [...chat.messages, errorMessage],
              updatedAt: new Date()
            }
          : chat
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-gray-900 text-white flex flex-col overflow-hidden`}>
        <div className="p-4 border-b border-gray-700">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-3 mb-4">
            <Bot className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold">PenguinGPT</h1>
          </div>
          <button
            onClick={createNewChat}
            className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`group flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentChatId === chat.id ? 'bg-gray-700' : 'hover:bg-gray-800'
                }`}
                onClick={() => setCurrentChatId(chat.id)}
              >
                <MessageSquare className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{chat.title}</p>
                  <p className="text-xs text-gray-400">
                    {chat.updatedAt.toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-600 rounded transition-all"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              PenguinGPT - Your Swim Teaching Assistant
            </h2>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {!currentChat || currentChat.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bot className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PenguinGPT</h3>
              <p className="text-gray-600 max-w-md">
                Your AI-powered swim teaching assistant. Ask me anything about swim instruction, 
                SSI certification, teaching techniques, or student management.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Teaching Techniques</h4>
                  <p className="text-sm text-gray-600">Get advice on effective swim teaching methods</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Student Management</h4>
                  <p className="text-sm text-gray-600">Learn how to handle different student personalities</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Protocols</h4>
                  <p className="text-sm text-gray-600">Understand water safety and emergency procedures</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">SSI Certification</h4>
                  <p className="text-sm text-gray-600">Get help with SSI course requirements and standards</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {currentChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  <div className={`max-w-3xl ${message.role === 'user' ? 'order-1' : ''}`}>
                    <div
                      className={`p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white text-black'
                          : 'bg-white border border-gray-200 text-black'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0 order-2">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-4 justify-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">Connecting to PenguinGPT...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask PenguinGPT about swim teaching..."
                  className="w-full p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={1}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              PenguinGPT is your AI swim teaching assistant. Ask questions about SSI certification, teaching techniques, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenguinGPT;