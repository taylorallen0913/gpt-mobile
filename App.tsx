import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Chat } from './components/Chat';
import { Footer } from './components/Footer';
import { ModelInfo } from './components/ModelInfo';
import { ChatProvider } from './context/chat-context';

// Polyfill so openai api calls work, see https://www.reddit.com/r/reactnative/comments/ykhja6/comment/iuue2mh/?utm_source=share&utm_medium=web2x&context=3
import 'react-native-url-polyfill/auto';

export default function App() {
  return (
    <ChatProvider>
      <KeyboardAvoidingView
        style={{ backgroundColor: '#343541', flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <SafeAreaView>
              <ModelInfo description="GPT-4" />
              <ScrollView
                style={{ backgroundColor: '#343541', height: '100%' }}
              >
                {/* Without this the TouchableWithoutFeedback does not allow scrolling  */}
                <View onStartShouldSetResponder={() => true}>
                  <Chat />
                </View>
              </ScrollView>
            </SafeAreaView>
            <Footer />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ChatProvider>
  );
}
