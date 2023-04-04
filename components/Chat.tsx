import { useEffect, useRef } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useChat } from '../context/chat-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Chat: React.FC<{}> = () => {
  const flatListRef = useRef<FlatList>(null);
  const { state } = useChat();

  useEffect(() => {
    if (flatListRef.current && state.messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [state.messages]);

  return (
    <View style={{ height: '100%', paddingBottom: 250 }}>
      <FlatList
        ref={flatListRef}
        data={
          !state.assistantLoading
            ? state.messages
            : [...state.messages, { role: 'loading', content: '...' }]
        }
        keyExtractor={({ content }) => {
          return content;
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item.role === 'user' ? '#343541' : '#40414f',
                paddingVertical: 20,
                paddingHorizontal: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {item.role === 'assistant' || item.role === 'loading' ? (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={{
                    uri: 'https://diviengine.com/wp-content/uploads/2023/01/ChatGPT-Logooptimized-610x610.png',
                  }}
                />
              ) : (
                <AntDesign name="user" size={30} color="white" />
              )}
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  paddingHorizontal: 15,
                  lineHeight: 25,
                }}
              >
                {item.content}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
