"use client"

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import MealCard from './MealCard';
import fetchAllDishes from '../functions/api';
import usePagination from '../functions/usePagination';


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

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    pagination.goToPage(page);
  };

  return (
    <Box sx={{
      width: 1,
      background: "radial-gradient(circle, rgba(92,59,26,1) 10%, rgba(13,12,11,1) 100%)",
      p: "50px",
    }}>
      <Grid container spacing={5} sx={{
        height: "max-content",
      }}>
        {
          activeMeals ? activeMeals.map((meal) => (
              <Grid item key={meal.idMeal} xs={6}>
                <MealCard key={meal.idMeal} meal={meal} />
              </Grid>
            ))
          : null
        }
      </Grid>
      <Pagination 
        count={pagination.totalPages}
        page={pagination.activePage}
        onChange={handlePageChange}
        variant="outlined"
        size="large"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          '& .MuiPaginationItem-root': {
            backgroundColor: "#f0c18d",
            '&:hover': {
              backgroundColor: "#ba966e",
            },
          },
          '& .Mui-selected': {
            backgroundColor: '#dea55f',
            '&:hover': {
              backgroundColor: "#dea55f",
            },
          },
        }}
      />
    </Box>
  )
}

export default CardBlock