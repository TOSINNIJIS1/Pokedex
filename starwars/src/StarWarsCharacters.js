import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';


const People = (props) => {
     return (
    <div>
      <Card className="Card">
        <CardBody className="cardBody">
        <img width="100%" className="image" src={props.image} alt="Card image cap"/> 
            <CardTitle className="title">Artist: {props.artist}</CardTitle>
            <CardText className="text">Name: {props.name} </CardText>
            <CardText className="text"> Rarity: {props.rarity} </CardText>
        </CardBody>
      </Card>
    </div>

  );
};

export default People;