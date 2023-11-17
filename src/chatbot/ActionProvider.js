// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleKorean = () => {
    const botMessage = createChatBotMessage('반가워요!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClock = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
  
    const botMessage = createChatBotMessage(`현재 시간은 ${currentTime}입니다.`);
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleKorean,
            handleClock,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
