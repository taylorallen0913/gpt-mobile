import { Image, Text, View } from 'react-native';
import { useChat } from '../context/chat-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Chat: React.FC<{}> = () => {
  const { state } = useChat();

  return (
    <View style={{ flex: 1, height: '100%' }}>
      {state.messages.map((item, i) => {
        return (
          <View
            key={i}
            style={{
              backgroundColor: item.role === 'user' ? '#343541' : '#40414f',
              paddingVertical: 20,
              paddingHorizontal: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {item.role === 'assistant' ? (
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
                flexGrow: 1,
                color: 'white',
                fontSize: 15,
                paddingLeft: 15,
              }}
            >
              {item.content}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
