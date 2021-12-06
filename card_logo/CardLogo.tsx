import React from "react";
import { Card, Col, Row, Typography } from "antd";

interface ICardLogo {
  headerText: string;
  content: string;
  icon: JSX.Element;
  onClick: Function;
}

export default function CardLogo(props: ICardLogo) {
  const { Title } = Typography;

  return (
    <Col
      onClick={() => props.onClick()}
      xs={24}
      sm={24}
      md={12}
      lg={12}
      xl={6}
      xxl={6}
      className='mb-24'
      style={{ cursor: "pointer" }}>
      <Card bordered={false} className='criclebox '>
        <div className='number'>
          <Row align='middle' gutter={[24, 0]}>
            <Col xs={16} xxl={18}>
              <span>{props.headerText}</span>
              <Title level={5}>{props.content}</Title>
            </Col>
            <Col xs={6}>
              <div
                className="icon-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {props.icon}
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
}
