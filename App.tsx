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

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: '#343541' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <SafeAreaView>
            <ModelInfo description="Default (GPT-3.5)" />
            <ScrollView style={{ backgroundColor: '#343541', height: '100%' }}>
              <View onStartShouldSetResponder={() => true}>
                <Chat />
              </View>
            </ScrollView>
          </SafeAreaView>
          <Footer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
