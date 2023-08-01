import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import MealData from '../interfaces'

interface Meal {
  meal: MealData
}

const MealCard: React.FC<Meal> = ({ meal }) => {
  return (
    <Card sx={{
      backgroundColor: "#f0c18d",
    }}>
      <CardActionArea>
        <CardMedia
          component = "img"
          height = "300px"
          image = {meal.strMealThumb}
          alt = {meal.strMeal}
        />
        <CardContent >
          <Typography gutterBottom variant="h5">{meal.strMeal}</Typography>
          <Typography variant="body2">{meal.strCategory}</Typography>
          {
            meal.strTags ? meal.strTags.split(',').map((tag) => (
              <Chip label={tag} key={tag} sx={{
                mr: "10px",
                mt: "10px",
                backgroundColor: "#dea55f",
              }}/>
            ))
            : null
          }
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MealCard