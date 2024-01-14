import OpenAI from "openai";
import generatePrompt from "./generateAPIPrompt.js";

const openAiApiKey = "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";
const openAi = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true,
});

// Returns a generated recipe formatted in HTML
// as specified in generatePrompt.js
async function generateRecipeHTML(ingredients, categories) {
  try {
    const recipePrompt = generatePrompt(ingredients, categories);

    const completion = await openAi.chat.completions.create({
      messages: [{ role: "system", content: recipePrompt }],
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
async function generateRecipeImageURL(title) {
  try {
    const recipeImagePrompt = `Delicious dish: ${title}, served on a table at home with pleasant lighting and pretty decoration.`;

    const image = await openAi.images.generate({
      model: "dall-e-3",
      prompt: `${recipeImagePrompt}`,
    });

    const recipeImageURL = image.data[0].url;

    return recipeImageURL;
  } catch (error) {
    console.error("Error:", error);
  }
}

export { generateRecipeHTML, generateRecipeImageURL };
