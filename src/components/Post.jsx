import React from 'react'
import {
    Card,
    Typography,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    CardActions,
    Checkbox
  } from '@mui/material';
  import { MoreVert, Share, Favorite, FavoriteBorder } from '@mui/icons-material';
  

export const Post = () => {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Deo"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="500"
          image="https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

           
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}
