import React from "react";
import Card from "antd/lib/card";
import { Avatar, List } from "antd";
import { IHistoryTransaction } from "./model/HistoryTranscationModel";

export default function HistoryTransaction(props: IHistoryTransaction) {
  return (
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 0 }}
      className="header-solid h-full  ant-list-yes"
      title={<h6 className="font-semibold m-0">Your Transactions</h6>}
    >
      {props.dataTranscation.map((item, index) => {
        return (
          <List
            key={index}
            header={<h6>{item.date}</h6>}
            className="transactions-list ant-newest"
            itemLayout="horizontal"
            dataSource={item.data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar size="small" className={item.textclass}>
                      {item.avatar}
                    </Avatar>
                  }
                  title={item.title}
                  description={item.description}
                />
                <div className="amount">
                  <span className={item.amountcolor}>{item.amount}</span>
                </div>
              </List.Item>
            )}
          />
        );
      })}
    </Card>
  );
}
