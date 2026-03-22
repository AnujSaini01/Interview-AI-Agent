import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const ai = new Groq({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    // Groq uses OpenAI's chat completion interface natively
    //llama-3.3-70b-versatile
    const response = await ai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: messages,
    });

    const content = response.choices?.[0]?.message?.content;

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content;
  } catch (error) {
    console.error("Groq API error:", error.message || error);
    throw new Error("Groq API Error");
  }
};
