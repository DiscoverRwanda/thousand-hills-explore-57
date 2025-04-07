
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    content: 'Hello! Welcome to Discover Rwanda. How can I help you plan your trip today?',
    sender: 'bot',
    timestamp: new Date()
  }
];

// Mock responses for the chatbot based on keywords
const BOT_RESPONSES: Record<string, string[]> = {
  'hello': ['Hello! How can I assist with your Rwanda travel plans today?', 'Hi there! Looking to explore Rwanda?'],
  'hotel': ['We have many great hotels in Rwanda from luxury to budget options. Which city are you planning to visit?', 'Rwanda offers excellent accommodations ranging from 5-star hotels to eco-lodges. What's your preference?'],
  'gorilla': ['Gorilla trekking is Rwanda\'s most popular activity! The permits cost $1,500 per person and should be booked months in advance.', 'Rwanda is famous for mountain gorilla trekking in Volcanoes National Park. Would you like to know more about available tours?'],
  'cost': ['Travel costs in Rwanda vary widely. A mid-range budget might be $150-250 per day including accommodation, food, and some activities.', 'Rwanda can be more expensive than neighboring countries. Budget travelers should plan for at least $100/day, while luxury experiences can exceed $500/day.'],
  'food': ['Rwandan cuisine features dishes like Isombe (cassava leaves), Brochettes (grilled meat skewers), and Urwagwa (banana beer). What would you like to try?', 'The food in Rwanda is delicious! You must try traditional dishes at local restaurants in Kigali.'],
  'visa': ['Many visitors can get a visa on arrival or apply online through the Rwanda immigration website for $50.', 'Rwanda offers a 30-day tourist visa that you can apply for online before your trip.'],
  'transportation': ['You can get around Rwanda by private car hire, motorcycle taxi (bodaboda), or public buses for longer routes.', 'Rwanda has well-maintained roads. Most tourists hire a driver or join organized tours to travel between cities.'],
  'weather': ['Rwanda has a temperate tropical highland climate with temperatures between 15-30°C year-round. The dry seasons (June-September and December-February) are best for travel.', 'The weather in Rwanda is pleasant throughout the year due to its elevation, but the dry seasons are best for gorilla trekking.'],
  'safety': ['Rwanda is considered one of the safest countries in Africa. It's clean, organized, and has low crime rates.', 'Rwanda is very safe for tourists. The country has made remarkable progress and is now one of Africa's safest destinations.'],
};

const getResponse = (message: string): string => {
  const lowercaseMsg = message.toLowerCase();
  
  // Check for matches in our response database
  for (const [keyword, responses] of Object.entries(BOT_RESPONSES)) {
    if (lowercaseMsg.includes(keyword)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // Default response if no keywords match
  return "I'm not sure about that. Would you like to know about gorilla trekking, accommodation, food, transportation, or costs in Rwanda?";
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getResponse(newMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className={`bg-white rounded-lg shadow-lg w-80 md:w-96 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        } flex flex-col`}>
          <div 
            className="bg-rwanda-green text-white p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
            onClick={toggleMinimize}
          >
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Rwanda Travel Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              {isMinimized ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <Minimize className="w-5 h-5" />
              )}
              <X className="w-5 h-5" onClick={toggleChat} />
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="flex-grow p-4 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 max-w-[75%] ${
                      message.sender === 'user' ? 'ml-auto' : ''
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/images/gorilla-icon.svg" alt="Chatbot" />
                          <AvatarFallback>RW</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-rwanda-green text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs opacity-70 block mt-1">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      {message.sender === 'user' && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="border-t p-3 flex">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="ml-2 bg-rwanda-green hover:bg-rwanda-darkGreen"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-rwanda-green hover:bg-rwanda-darkGreen shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
