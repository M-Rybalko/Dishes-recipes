import React from 'react'
import Box from '@mui/material/Box';
import RecipeData from '@/interfaces';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type Props = {
  promise: Promise<RecipeData>
}

export default async function Recipe({ promise }: Props) {
  const recipe = await promise;  
  const parseYouTubeLink = () => {
    return recipe.strYoutube.split('=')[1];
  }

  return (
    <Box sx={{
      width: 1,
      background: "radial-gradient(circle, rgba(92,59,26,1) 10%, rgba(13,12,11,1) 100%)",
      p: "50px",
      color: "#ede0b9"
    }}>
      <Typography gutterBottom variant="h1" sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}>{recipe.strMeal}</Typography>
      <Paper elevation={3} sx={{ 
        p: 2,
        display: 'flex', 
        justifyContent: 'center',
        width: 1,
        backgroundColor: "transparent",
        boxShadow: 0
      }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${parseYouTubeLink()}`}
          title="YouTube"
          frameBorder="0"
          allowFullScreen
        />
      </Paper>
      <Box sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}>
        {
          recipe.strTags ? recipe.strTags.split(',').map((tag) => (
            <Chip label={tag} key={tag} sx={{
              mr: "10px",
              my: "40px",
              backgroundColor: "#dea55f",
            }}/>
          ))
          : null
        }
      </Box>
      <Typography variant="body1" sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        mb: "30px"
      }}>{recipe.strInstructions}</Typography>
      <Typography gutterBottom variant="h3" sx= {{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}>Ingredients:</Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <List>
          {
            recipe ? Object.keys(recipe).map((ingredient) => (
              ingredient.slice(0, 13) === "strIngredient"
              ? <ListItem sx ={{
                justifyContent: "center"
              }} key={ingredient}>{recipe[ingredient]}</ListItem>  
              : null
            ))
            : null
          }
        </List>
      </Box>
    </Box>
  )
}
