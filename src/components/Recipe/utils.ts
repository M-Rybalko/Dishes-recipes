import RecipeData from '@/interfaces/interfaces';

export const parseYouTubeLink = (link: string) => {
  return link.split('=')[1];
}

export const parseIngredients = (recipe: RecipeData) => {
  const ingredients: string[] = [];
  Object.keys(recipe).map((element: string) => {
    const key = element as keyof RecipeData;
    if(element.slice(0, 13) === "strIngredient" && recipe[key] !== null) {
      ingredients.push(recipe[key]);
    }
  })
  return ingredients;
}