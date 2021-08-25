import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    margin: "2rem",
    boxShadow: "0px 7px 10px rgba(0,0,0,0.5)",
  },
  text: {
    textAlign: "left",
  },
  image: {
    maxWidth: "100%",
    width: "auto",
    maxHeight: "40vh",
  },
}));

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const classes = useStyles();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.root}>
        <CardHeader title={postData.title} />
        <img
          className={classes.image}
          src={urlFor(postData.mainImage).url()}
          alt=""
        />
        <CardContent>
          <BlockContent
            className={classes.text}
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
