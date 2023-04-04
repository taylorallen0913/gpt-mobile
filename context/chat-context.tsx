import { createContext, useReducer, useContext, ReactNode } from 'react';
import { ChatMessage } from '../util/openai';

type Action = { type: 'add'; message: ChatMessage };
type Dispatch = (action: Action) => void;
type State = { messages: ChatMessage[] | any };
type ChatProviderProps = { children: ReactNode };

const ChatStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function chatReducer(state: State, action: Action) {
  switch (action.type) {
    case 'add': {
      // If this is the first message
      if (state.messages.length === 0) {
        return {
          messages: [action.message],
        };
      }
      return { messages: [...state.messages, action.message] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ChatProvider({ children }: ChatProviderProps) {
  const [state, dispatch] = useReducer(chatReducer, { messages: [] });
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
