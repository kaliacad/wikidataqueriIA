import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const genAI = new GoogleGenerativeAI('AIzaSyDB2XZJwiiBp1SEylnyyLhNI9e_dxxJZzY');


/**
 * RUN API
 * @param {string} promptInput 
 */

export default async function runAPI (promptInput) {
     // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = promptInput;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}