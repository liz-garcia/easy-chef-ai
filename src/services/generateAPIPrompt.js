// Returns an HTML response
const generateAPIPrompt = (ingredientList, categoryList) => {
  const prompt = `
    Please provide a 5-steps easy-to-follow recipe using these ingredients:
    ${ingredientList.join(", ")} in the category of ${categoryList.join(", ")}.

    Finish the recipe with a kind, short and sweet message about:
    having a nice home-made meal or saying something like "Enjoy your meal!"
    or similar.
        
    Format the response in HTML as follows:
    <div className="recipe">
        <div className="recipe-image">
            <img alt="" src=""/>
        </div>
        <h1 className="recipe-title">title here</h1>
        <ul className="recipe-steps">
            <li className="recipe-step">
                <h2>Step 1</h2>
                <p>step description</p>
            </li>
            <li className="recipe-step">
                <h2>Step 2</h2>
                <p>step description</p>
            </li>
            <li className="recipe-step">
                <h2>Step 3</h2>
                <p>step description</p>
            </li>
            <li className="recipe-step">
                <h2>Step 4</h2>
                <p>step description</p>
            </li>
            <li className="recipe-step">
                <h2>Step 5</h2>
                <p>step description</p>
            </li>
        </ul>
        <div className="message">
            <p>Kind message at the end</p>
        </div>
    </div>

    Please DO NOT add anything else.
    Only strictly the code as I am requesting it here.
    This is being used for an API request, and I need a precise response message.`;

  return prompt;
};

export default generateAPIPrompt;
