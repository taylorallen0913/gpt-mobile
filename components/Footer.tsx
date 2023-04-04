import { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Footer: React.FC<{}> = () => {
  const [input, onChangeInput] = useState<string>('');
  const [inputOffset, setInputOffset] = useState<number>(0);

  return (
    <View
      style={{
        height: 80 + inputOffset > 250 ? 250 : 80 + inputOffset,
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
        <AutoGrowingTextInput
          value={input}
          maxHeight={200}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setInputOffset(height);
          }}
          onChangeText={onChangeInput}
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
