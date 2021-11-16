import React, { Fragment } from "react";
import Card from "antd/lib/card";
import { Avatar, List, Pagination } from "antd";
import { IHistoryTransaction } from "./model/HistoryTranscationModel";

export default function HistoryTransaction(props: IHistoryTransaction) {
  return (
    <Fragment>
      <Card
        style={{ marginBottom: 20 }}
        bordered={true}
        bodyStyle={{ paddingTop: 0 }}
        className="header-solid h-full  ant-list-yes criclebox"
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
                      <Avatar size="small" className={item.textclass} style={{ display: 'flex', alignItems: 'center' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </Fragment>
  );
}
