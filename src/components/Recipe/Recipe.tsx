import React from 'react'
import Box from '@mui/material/Box';
import RecipeData from '@/interfaces/interfaces';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as styles from './Recipe.styles';
import * as utils from './utils';

type Props = {
  promise: Promise<RecipeData>
}

export default async function Recipe({ promise }: Props) {
  const recipe = await promise;  

  return (
    <Box sx={styles.globalWrapper}>
      <Typography gutterBottom variant="h1" sx={styles.dishName}>{recipe.strMeal}</Typography>
      <Typography variant="body2" sx={styles.dishCategory}>{recipe.strCategory}</Typography>
      <Box sx={styles.tagBox}>
        {
          recipe.strTags && recipe.strTags.split(',').map((tag) => (
            <Chip label={tag} key={tag} sx={styles.tag}/>
          ))
        }
      </Box>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.youtube}>
          <iframe
            width="360"
            height="400"
            src={`https://www.youtube.com/embed/${utils.parseYouTubeLink(recipe.strYoutube)}`}
            title="YouTube"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </Paper>
        <Box sx ={{ width: "33%" }}>
          <Typography gutterBottom variant="h5" sx= {styles.infoHeader}>Instructions:</Typography>
          <Typography variant="body2" sx={styles.instructions}>{recipe.strInstructions}</Typography>
        </Box>
        <Box sx={{ width: "33%" }}>
          <List>
            <Typography gutterBottom variant="h5" sx= {styles.infoHeader}>Ingredients:</Typography>
            {
              recipe && utils.parseIngredients(recipe).map((ingredient) => {
                return <ListItem sx ={{ justifyContent: "center" }} key={ingredient}>{ingredient}</ListItem>
              })
            }
          </List>
        </Box>
      </Box>
    </Box>
  )
}
