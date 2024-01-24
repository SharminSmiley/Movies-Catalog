import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
          component="img"
          sx={{
            height:"90%",
            width:"50%",
            marginLeft:50,
            marginRight:40,
            padding:0, 
          }}
          alt="Movies"
          src="https://st2.depositphotos.com/3591429/5997/i/950/depositphotos_59977559-stock-illustration-hands-holding-word-about-us.jpg"
          />
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h2">Welcome To My Movie website</Typography>
        <p>
          <h4>
            <b>
        Welcome to our website, where the magic of cinema comes to life! We are a dedicated team of movie enthusiasts,
         cinephiles, and storytellers who believe in the power of film to inspire, entertain, and connect people from all walks of life.
         </b>
         </h4>
        </p>
        <br />
        <p>
          <h1>
        Our Mission:
        </h1>
        <h4>
        <b>
             our mission is to create a hub for movie lovers, providing a unique and immersive
              experience for enthusiasts of all genres. We are committed to celebrating the art of 
              filmmaking, supporting emerging talent, and fostering a vibrant community that
               shares our passion for the silver screen.Join us on social media, participate in discussions,
                and let your voice be heard. Your input helps shape the future of our platform,
                 making it a true reflection of the diverse tastes and interests of our audience.Thank you 
                 for choosing our websiteas your cinematic companion. Let the journey through the world of movies begin!
               </b>
               </h4>
        </p>
      </Box>
    </Layout>
  );
};

export default About;
