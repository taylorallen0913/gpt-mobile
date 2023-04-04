import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '@env';

export interface ChatMessage {
  role: string;
  content: string;
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getCompletion = async ({ model, messages }) => {
  const completion = await openai.createChatCompletion({
    model,
    messages,
  });
  return completion.data.choices[0].message;
};
