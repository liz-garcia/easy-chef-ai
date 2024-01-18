import OpenAI from "openai";
import generateRecipePrompt from "./generateRecipePrompt.js";

// Access the OpenAI API key
// eslint-disable-next-line no-undef
const openAiApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

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
    const prompt = `Forefront of delicious dish: ${recipeTitleString}, served on a table at home with pleasant lighting and pretty decoration.`;

    const image = await openai.createImage({
      model: "dall-e-3",
      prompt: `${prompt}`,
      n: 1,
      size: "750x750",
    });
    
    // image_url = response.data.data[0].url;

    // const image = await openAi.images.generate({
    //   model: "dall-e-3",
    //   prompt: `${prompt}`,
    //   size: "512x512",
    // });

    const recipeImageURL = image.data.data[0].url;

    return recipeImageURL;
  } catch (error) {
    console.error("Error:", error);
  }
}

export { generateRecipeHTML, generateRecipeImageURL };
