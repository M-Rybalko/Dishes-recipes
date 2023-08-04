"use client"

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import MealCard from '../MealCard/MealCard';
import { fetchAllDishes } from '../../lib/api/api';
import usePagination from '../../hooks/usePagination';
import Link from 'next/link';
import MealData from '../../interfaces/interfaces';
import * as styles from './CardBlock.styles';

const CardBlock  = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllDishes();
      setMeals(response);
    }
    fetchData();
  }, []);

  const pagination = usePagination(meals.length, 10);
  const activeMeals = meals.slice(pagination.firstElement, pagination.lastElement);

  const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
    pagination.goToPage(page);
  };

  return (
    <Box sx={styles.globalWpapper}>
      <Grid container spacing={5} sx={{ height: "max-content", }}>
        {
          activeMeals && activeMeals.map((meal: MealData) => (
            <Grid item key={meal.idMeal} xs={12} sm={6}>
              <Link href={`/${meal.idMeal}`}>
                <MealCard key={meal.idMeal} meal={meal} />
              </Link>
            </Grid>
          ))
        }
      </Grid>
      <Pagination 
        count={pagination.totalPages}
        page={pagination.activePage}
        onChange={changePage}
        variant="outlined"
        size="large"
        sx={styles.pagination}
      />
    </Box>
  )
}

export default CardBlock