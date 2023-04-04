import { Text, View } from 'react-native';

export const Chat: React.FC<{}> = () => {
  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      {['Hello world', 'hello world 2', 'text message'].map((message, i) => (
        <Text key={i}>{message}</Text>
      ))}
    </View>
  );
};
