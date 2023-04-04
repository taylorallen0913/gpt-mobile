import { createContext, useReducer, useContext, ReactNode } from 'react';
import { ChatMessage } from '../util/openai';

interface Action {
  type: 'addMessage' | 'setLoading';
  message?: ChatMessage;
}
interface Dispatch {
  (action: Action): void;
}
interface State {
  messages: ChatMessage[] | any;
  assistantLoading?: any;
}
interface ChatProviderProps {
  children: ReactNode;
}

const ChatStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function chatReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setLoading': {
      return { messages: [...state.messages], assistantLoading: true };
    }
    case 'addMessage': {
      // If this is the first message
      if (state.messages.length === 0) {
        return {
          messages: [action.message],
        };
      }
      return {
        messages: [...state.messages, action.message],
        assistantLoading: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ChatProvider({ children }: ChatProviderProps) {
  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    assistantLoading: false,
  });
  const value = { state, dispatch };
  return (
    <ChatStateContext.Provider value={value}>
      {children}
    </ChatStateContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatStateContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export { ChatProvider, useChat };
