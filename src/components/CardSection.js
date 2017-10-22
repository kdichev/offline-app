import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { v4 } from 'node-uuid';
import NewsCard from './Card';

const styles = theme => ({
  container: {
    textAlign: 'initial',
    margin: 10
  }
});

class CardSection extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <div>
        {data.map(item =>
          <div key={v4()}>
            <NewsCard
              section={item.section}
              title={item.title}
              abstract={item.abstract}
              byLine={item.byline}
              link={item.url}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(CardSection);
