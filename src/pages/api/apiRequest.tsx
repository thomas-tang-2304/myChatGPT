import { Configuration, OpenAIApi } from "openai";

export const getMessageReponse = async (messagecontent: any): Promise<any> => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${messagecontent}`,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    n: 5,
  })

  return response;
};

