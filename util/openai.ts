import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '@env';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
console.log(OPENAI_API_KEY);
const openai = new OpenAIApi(configuration);

export const getCompletion = async ({
  prompt,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
}) => {
  const completion = await openai.createCompletion({
    model,
    prompt,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty,
    max_tokens,
  });
  console.log('complete');
};
