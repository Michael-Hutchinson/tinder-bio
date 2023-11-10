import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { writingStyle, tinderBio } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: `Generate 2 ${writingStyle} tinder biographies. Make sure each response is less than 500 characters. Make sure each response is clearly labeled "1." and "2." and make sure you dont include any special characters or numbers in the response. You can use their existing bio as a starting point: ${tinderBio}${
          tinderBio.slice(-1) === '.' ? '' : '.'
        }`,
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
