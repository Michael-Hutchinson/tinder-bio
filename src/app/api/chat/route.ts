import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY environment variable is not set');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { writingStyle, tinderBio } = await req.json();

  if (!writingStyle || !tinderBio) {
    return {
      status: 400,
      body: 'writingStyle and tinderBio are required',
    };
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'user',
          content: `Generate 2 ${writingStyle} tinder biographies. Make sure each response is less than 500 characters. ${
            tinderBio
              ? `You can use their existing bio as a starting point: ${tinderBio}${
                  tinderBio.slice(-1) === '.' ? '' : '.'
                }`
              : ''
          }. Make sure each response is clearly labeled "1." and "2." and make sure you dont include any special characters or numbers in the response.`,
        },
      ],
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: 'An error occurred while generating the tinder biographies',
    };
  }
}
