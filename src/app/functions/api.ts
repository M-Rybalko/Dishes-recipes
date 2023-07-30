import axios from 'axios';

const fetchAllDishes = async () => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchAllDishes;