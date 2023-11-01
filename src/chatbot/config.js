import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotHeader from './ChatbotHeader';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  customComponents: {
   
   header: (props) => <ChatbotHeader onCloseClick={props.onCloseClick} />,
    botAvatar: (props) => <img width='50px' src='/images/bot-avatar.png' {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5D86EF',
    },
    
  },
};

export default config;
