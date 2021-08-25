import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "1rem",
    boxShadow: "0px 7px 10px rgba(0,0,0,0.5)",
    minHeight: "33%",
  },
  media: {
    height: 50,
    marginTop: "20px",
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  link: {
    textDecoration: "none !important",
    color: "#FFFFFF",
    "&:visited": {
      color: "#FFFFFF",
    },
  },
  button: {
    backgroundColor: "#30475e",
    "&:hover": {
      backgroundColor: "#30475e",
    },
  },
}));

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const classes = useStyles();
  return (
    <Grid container justify="center">
      {allPostsData &&
        allPostsData.map((post, index) => (
          <Grid item xs={12} md={8} key={post.slug.current}>
            <Card className={classes.root}>
              <CardHeader title={post.title} />
              {post.mainImage && (
                <CardMedia
                  className={classes.media}
                  image={post.mainImage.asset.url}
                />
              )}
              <CardContent>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/blog/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <Button className={classes.button}>
                      <a
                        className={classes.link}
                        href={"/blog/" + post.slug.current}
                        aria-label="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Read More
                      </a>
                    </Button>
                  </span>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
