import { Configuration, OpenAIApi } from "openai";


export let finishedText = '';
export const refreshText = () => {
  finishedText = '';
};

export const getMessageReponse = async (messagecontent: any): Promise<any> => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${messagecontent}`,
    temperature: 0.7,
    max_tokens: 2048,
    top_p: 0.6,
    frequency_penalty: 0.7,
    presence_penalty: 0.6,
  });



  finishedText += response?.data?.choices[0]?.text;
  return response?.data?.choices[0]?.finish_reason


};

