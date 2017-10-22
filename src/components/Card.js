import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    textAlign: 'initial',
    margin: 10
  },
  pos: {
    marginBottom: 12
  }
});


class NewsCard extends Component {
  render() {
    const { section, title, abstract, classes, byLine, link } = this.props
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" >
            {`${section}`}
          </Typography>
          <Typography type="headline" component="h2">
            {`${title}`}
          </Typography>
          <Typography type="body1" className={classes.pos}>
            {`${byLine}`}
          </Typography>
          <Typography component="p">
            {`${abstract}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense href={`${link}`}>Read More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsCard);
