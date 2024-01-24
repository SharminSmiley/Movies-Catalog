
// import React from "react";
// import { MoviesList1 } from "../data/Starisborndata";
// import Layout from "../components/Layout/Layout";
// import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';


// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Rating,
//   Typography,
// } from "@mui/material";

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3
// : 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// const getLabelText = (value) => {

//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// };
// const Movies = () => {
//   const [comment, setComment] = React.useState('');
//   return (
//     <Layout>
//      <div style={{backgroundImage:"../images/img1.jpg"}}> 
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:" center"}}>
//         {MoviesList1.map((Movies) => (
//           <Card sx={{ maxWidth: "400px", marginRight:'30px',m: 2 }}>
//             <CardActionArea>
//               <CardMedia sx={{ minHeight: "400px" }} component="img" src={Movies.image} alt={Movies.name} />
//               <CardContent>
//                 {/* <Typography variant="h5" gutterBottom component="div">{Movies.name}</Typography>
               
//                 <Typography variant="body2">{Movies.description} </Typography>
//                  */}
//                 {/* <br />
//                 <h2>Director: Bradley Cooper</h2> <br />
//                 <h2>Writers: sam eliot</h2><br />
//                 <h2>Release date:12 October 2018 (India)</h2> <br />
//                 <br/> */}
//                 {/* <Rating name="hover-feedback" value={Movies.rating} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => { }} /><br/>
//                 <TextField id="outlined-multiline-static" label="Add a comment" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)}
//                  /> <SendIcon/>
//                 */}
//               </CardContent>
//             </CardActionArea>
//           </Card>))}
//                 </Box> 
//                 </div>
//                      </Layout>
                    
//            ); }; 


// export default Movies;
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout/Layout';
import { Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import YouTubeIcon from '@mui/icons-material/YouTube';
const defaultTheme = createTheme();

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
};

const MovieDetails = () => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState('');

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };
  const youtubeLink = 'https://youtu.be/nSbzyEJ8X9E';
  return (
    <Layout>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh', display: 'flex' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/pv-target-images/792df628d07362a8028137b8ee141ba382f0839f4c02b508072353f2d33d7f1f.jpg)',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
             backgroundSize:'cover',
              backgroundPosition: 'center',
              marginTop:'70px',
              marginBottom:'70px'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square  >
            <Typography sx={{padding: '20px'}}>
              <h1 style={{ color: 'orange' }}> A star is born</h1>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                  Watch the trailer on YouTube
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
                After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he
                battles with alcoholism and his personal demons.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'blue' }}> Release Date: 12 October 2018 (India)</h2>
              <br />
              <h2 style={{ color: 'brown' }}>Running time:2:15:43</h2><br/>

              <h2 style={{ color: 'red' }}>Director: Bradley Cooper</h2><br/>
             <h2>Actors:</h2><p>
Bradley Cooper
Lady Gaga
Andrew Dice Clay
Dave Chappelle
Sam Elliott
Anthony Ramos
Rafi Gavron
Lukas Nelson & Promise of the Real</p>
              <br />
             
              <br />
              <br />
              <Rating name="hover-feedback" value={rating} precision={0.5} getLabelText={getLabelText} onChange={handleRatingChange} /> <br/><br/>              <TextField
                id="outlined-multiline-static"
                label="Add a comment"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              
              sx={{marginRight:'50px', width: '70%' }}  
               InputProps={{
                  endAdornment: (
                    <SendIcon
                      style={{
                        cursor: 'pointer',
                        marginBottom: '80px',
                        position: 'relative',
                        bottom: '5px',
                      }}
                    />
                    
                  ),
                }}
              />
<ThumbUpIcon/>
<ThumbDownIcon
style={{
  marginLeft:'11px'
}}/>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
};

export default MovieDetails;
