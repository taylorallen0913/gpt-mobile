import { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useChat } from '../context/chat-context';
import { getCompletion } from '../util/openai';

export const Footer: React.FC<{}> = () => {
  const [input, setInput] = useState<string>('');
  const [inputOffset, setInputOffset] = useState<number>(0);
  const { state, dispatch } = useChat();

  const addMessage = async () => {
    // Add user message
    dispatch({ type: 'addMessage', message: { role: 'user', content: input } });

    // Set assistant to be loading
    dispatch({ type: 'setLoading' });

    // Make API call
    const completion = await getCompletion({
      model: 'gpt-3.5-turbo',
      messages:
        'messages' in state
          ? [...state.messages, { role: 'user', content: input }]
          : { role: 'user', content: input },
    });

    dispatch({ type: 'addMessage', message: completion });
  };

  return (
    <View
      style={{
        height: 80 + inputOffset > 300 ? 300 : 80 + inputOffset,
        alignItems: 'center',
        backgroundColor: '#343541',
        marginTop: 'auto',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          backgroundColor: '#40414f',
          borderRadius: 10,
          marginTop: 0,
        }}
      >
        <AutoGrowingTextInput
          value={input}
          maxHeight={300}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setInputOffset(height);
          }}
          onChangeText={setInput}
          placeholder="Send a message..."
          placeholderTextColor="#9ca3af"
          style={{
            fontSize: 17,
            color: 'white',
            backgroundColor: '#40414f',
            width: '88%',
            height: '100%',
            padding: '5%',
            paddingTop: '5%',
            borderRadius: 10,
          }}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            setInput('');
            addMessage();
            Keyboard.dismiss();
          }}
        >
          <View
            style={{
              width: '12%',
              justifyContent: 'center',
            }}
          >
            <FontAwesome name="send-o" size={18} color="#6b7280" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
