import React from "react";
import { MoviesList } from "../data/data";
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const Movies = () => {
  return (
    <div>
       <AppBar position="static" sx={{backgroundColor:"#0F0F0F"}}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Movies catalog website
          </Typography>
       
          <Box sx={{ flexGrow: 1 }} />
         
<a href="/profile1"><Button variant="contained" >
              Profile
            </Button> </a>
        </Toolbar>
      </AppBar>
   
    <div>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MoviesList.map((Movies) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={Movies.image}
                alt={Movies.name} 
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {Movies.name}
                </Typography>
                <Typography variant="body2">{Movies.description}


                </Typography>
              </CardContent>
            </CardActionArea>


          </Card>
        ))}
      </Box>
      </div>
      </div>
  );
};

export default Movies;
