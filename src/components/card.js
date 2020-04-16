import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  console.log('props',props.response);
   
//   const res = useFetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-29&sortBy=publishedAt&apiKey=a0e5e3b2bc93487d8330e96f3b853e66", {});
// if (!res.response) {
//   return <div>Loading...</div>
// }

// console.log('anjali');
// console.log('res',res);
// console.log('title', res.response.articles[0].title);

// const title =res.response.articles[0].title;

// const img = res.response.articles[0].urlToImage;

// const desc = res.response.articles[0].description;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Active: {props.data.active}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confirmed: {props.data.confirmed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Deaths: {props.data.deaths}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Recovered: {props.data.recovered}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
        
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
    title: PropTypes.string,
    img:PropTypes.string,
    cildren:PropTypes.node
  };
  
