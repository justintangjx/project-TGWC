import React from "react";
import PropTypes from "prop-types";
import { Card, Col } from "antd";

const Mistake = props => (
  <Col xs={10}>
    <Card title={props.mistakeData.title} border={false}>
      <p>{props.mistakeData.date}</p>
      <p>{props.mistakeData.text}</p>
    </Card>
  </Col>
);


export default Mistake;
