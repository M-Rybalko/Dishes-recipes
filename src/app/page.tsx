import '@fontsource/roboto/700.css';
import Hero from '../components/Hero/Hero';
import CardBlock from '../components/CardBlock/CardBlock';
import { fetchAllDishes } from '@/lib/api/api';

export default function Home() {
  return (
    <main>
      <Hero />
      <CardBlock />
    </main>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetchAllDishes();
    const meals = response.data.meals;

    return meals;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
