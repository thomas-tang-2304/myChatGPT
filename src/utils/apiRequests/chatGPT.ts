import { Configuration, OpenAIApi } from 'openai';
export let finishedText = '';

export const refreshText = () => {
  finishedText = '';
};

export const sendAPIChatGPT = async (message: string): Promise<any> => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Human: ${message}`,
    temperature: 0.9,
    max_tokens: Infinity,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:'],
    n: 5
  });

  if (response?.data?.choices[0]?.finish_reason === 'stop')
    finishedText += response?.data?.choices[0]?.text;
  else {
    if (response?.data?.choices[0]?.finish_reason === 'length') {
      finishedText += response?.data?.choices[0]?.text;
      await sendAPIChatGPT(message + response?.data?.choices[0]?.text);
    }
  }
};
