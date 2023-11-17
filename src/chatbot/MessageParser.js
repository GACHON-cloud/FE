import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    else if (message.includes('안녕')) {
      actions.handleKorean();
    }
    else if (message.includes('시')){
      actions.handleClock();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions:{},
        });
      })}
    </div>
  );
};

export default MessageParser;