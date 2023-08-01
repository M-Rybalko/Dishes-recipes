import axios from 'axios';

export const fetchAllDishes = async () => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export const fetchRecipe = async (id: string) => {
  try {
    const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
