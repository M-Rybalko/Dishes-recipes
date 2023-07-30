import '@fontsource/roboto/700.css';
import Hero from './components/Hero';
import CardBlock from './components/CardBlock';
import axios from 'axios';

const Home = () => {
  return (
    <main className="PageContent">
      <Hero />
      <CardBlock />
    </main>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const meals = response.data.meals;

    return meals;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default Home;