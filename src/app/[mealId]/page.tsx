import '@fontsource/roboto/700.css';
import { fetchRecipe } from '@/functions/api';
import Recipe from '@/components/Recipe';
import RecipeData from '@/interfaces';

type Params = {
  params: {
    mealId: string
  }
}

export default async function RecipePage({ params: { mealId } }: Params) {
  const recipeData: Promise<RecipeData> = fetchRecipe(mealId);
  
  return (
    <main className="PageContent">
      <Recipe promise={recipeData} />
    </main>
  );
};
