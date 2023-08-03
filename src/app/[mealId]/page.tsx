import '@fontsource/roboto/700.css';
import { fetchRecipe } from '@/lib/api/api';
import Recipe from '@/components/Recipe/Recipe';
import RecipeData from '@/interfaces/interfaces';

type Params = {
  params: {
    mealId: string
  }
}

export default async function RecipePage({ params: { mealId } }: Params) {
  const recipeData: Promise<RecipeData> = fetchRecipe(mealId);
  
  return (
    <main>
      <Recipe promise={recipeData} />
    </main>
  );
};
