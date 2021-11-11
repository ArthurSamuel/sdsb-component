import React from "react";
import Card from "antd/lib/card";
import { PayCircleFilled } from "@ant-design/icons";
import { Button, Typography } from "antd";
import "./CardSmall.css"

interface ICardSmall {
  headerText: string;
  descriptionText: string;
  buttonText: string;
  icon: JSX.Element;
  onClick: Function;
}

export default function CardSmall(props: ICardSmall) {
  const { Text } = Typography

  return (
    <Card bordered={false} className="widget-2 h-full">
      <div className="container">
        <div className="cardsmall-logo-container">
          <div className="cardsmall-logo">
            {props.icon}
          </div>
        </div>
        <div style={{marginTop: 20, textAlign: 'center'}}>
          <Text strong style={{fontSize: 16}}>
            {props.headerText}
          </Text>
          <div style={{marginTop: 7}}>
            <Text style={{fontSize: 12, color: 'gray'}}>
              {props.descriptionText}
            </Text>
          </div>
        </div>
        <div style={{marginTop: 15}}>
          <Button type="ghost" onClick={() => props.onClick()}>
            {props.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
}
