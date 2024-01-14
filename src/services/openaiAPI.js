import OpenAI from "openai";
import generateRecipePrompt from "./generateRecipePrompt.js";

// Usually this API key would be stored in a .env file
// But for project presentation purposes, it has been included here
const openAiApiKey = "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";
const openAi = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true,
});

// Returns a recipe formatted in HTML
// as specified in the file generateRecipePrompt.js
// which provides an HTML template to be filled in
// with data generated through OpenAI API.
async function generateRecipeHTML(ingredients, categories) {
  try {
    const prompt = generateRecipePrompt(ingredients, categories);

    const completion = await openAi.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    const recipeHTML = completion.choices[0].message.content;

    return recipeHTML;
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
}

// Returns the URL for a generated image
// based on the titleText which is obtained by
async function generateRecipeImageURL(recipeTitleString) {
  try {
    const prompt = `Forefront photography of delicious dish: ${recipeTitleString}, served on a table at home with pleasant lighting and pretty decoration.`;

    const image = await openAi.images.generate({
      model: "dall-e-3",
      prompt: `${prompt}`,
    });

    const recipeImageURL = image.data[0].url;

    return recipeImageURL;
  } catch (error) {
    console.error("Error:", error);
  }
}

export { generateRecipeHTML, generateRecipeImageURL };
