import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

const API_KEY = 'AIzaSyDB2XZJwiiBp1SEylnyyLhNI9e_dxxJZzY'
const genAI = new GoogleGenerativeAI(API_KEY);


// generate Text
export async function generateText() {
   const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
   const prompt = 'les politiciennes en RDC femmes code SPARQL';
   const result = await model.generateContent(prompt);
   const reponse = await result.response;
   const text = reponse.text();
   return text;
}

// conver to image

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
   return {
      inlineData: {
         data: Buffer.from(fs.readFileSync(path)).toString("base64"),
         mimeType
      },
   };
}


// generate Image

export async function generateImage() {
   const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
}
