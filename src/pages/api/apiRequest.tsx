import { Configuration, OpenAIApi } from "openai";

export const getMessageReponse = async (messagecontent: any): Promise<any> => {
  const configuration = new Configuration({
    apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `${messagecontent}`,
  temperature: 0.6,
  max_tokens: 1000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
})
return response;
};

