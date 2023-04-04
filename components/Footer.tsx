import { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Footer: React.FC<{}> = () => {
  const [input, onChangeInput] = useState<string>('');

  return (
    <View
      style={{
        height: 120,
        alignItems: 'center',
        backgroundColor: '#343541',
        marginTop: 'auto',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        paddingTop: 15,
      }}
    >
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          backgroundColor: '#40414f',
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            color: 'white',
            backgroundColor: '#40414f',
            width: '88%',
            height: '100%',
            padding: 15,
            borderRadius: 10,
          }}
          onChangeText={onChangeInput}
          value={input}
          placeholder="Send a message..."
        />
        <TouchableWithoutFeedback onPress={() => alert('Message Sent!')}>
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
