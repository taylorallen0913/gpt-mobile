import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';

export const Footer: React.FC<{}> = () => {
  const [input, onChangeInput] = useState<string>('');

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#343541',
        marginTop: 'auto',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
      }}
    >
      <TextInput
        style={{
          color: 'white',
          backgroundColor: '#40414f',
          width: '95%',
          borderRadius: 10,
          padding: 15,
          marginTop: 10,
        }}
        onChangeText={onChangeInput}
        value={input}
        placeholder="Send a message..."
      />
    </View>
  );
};
