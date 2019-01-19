import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AnnotationCard extends Component {

  render() {
    return (
      <div className='annotation-card-div'>
        <Card className='annotation-card'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.annotationObj.category} / {this.props.annotationObj.brand} / {this.props.annotationObj.shade}
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.annotationObj.name}
            </Typography>
            <Typography color="textSecondary">

            </Typography>
            <Typography component="p">
              Why it's great:
              <br />
              {this.props.annotationObj.comment}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={this.props.annotationObj.url} target="_blank" rel="noopener noreferrer"><Button size="small">See More</Button></a>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default AnnotationCard;
