import { Configuration, OpenAIApi } from 'openai';
import { LoremIpsum } from 'lorem-ipsum';
import { OPENAI_API_KEY } from '@env';

export interface ChatMessage {
  role: string;
  content: string;
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mockAPIData = (sentences: number): string => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return lorem.generateSentences(sentences);
};

export const getCompletion = async ({
  model,
  messages,
}): Promise<ChatMessage> => {
  if (__DEV__) {
    return { role: 'assistant', content: mockAPIData(getRandomInt(5, 10)) };
  }
  const completion = await openai.createChatCompletion({
    model,
    messages,
  });
  return completion.data.choices[0].message;
};
