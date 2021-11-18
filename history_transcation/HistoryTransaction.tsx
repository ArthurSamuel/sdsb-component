import React, { Fragment, useEffect, useState } from "react";
import Card from "antd/lib/card";
import { Avatar, List, Pagination } from "antd";
import { ITransactionGroup } from "./model/HistoryTranscationModel";
import { HistoryTransactionService } from "./service/HistoryTransactionService";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FromStringToDate, CreditToString } from "../../../utils/Helper";
import Spinner from "../spinner/Spinner";

export default function HistoryTransaction() {
  const Service = new HistoryTransactionService();
  const [data, setData] = useState<ITransactionGroup[] | null>(null);
  const [totalPage, setTotalPage] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getHistoryData();
  }, [currentPage]);

  async function getHistoryData() {
    const results = await Service.GetHistory(currentPage);
    setTotalPage(results.data.total);
    let temp: ITransactionGroup[] = [];
    results.data.data.forEach((item) => {
      temp.push({
        date: item.date,
        data: [
          {
            title:
              item.reference_type === "gift"
                ? `Gift From ${item.giver.name}`
                : `Transfer To ${item.giver.name}`,
            amount: CreditToString(item.amount),
            amountcolor:
              item.reference_type === "gift" ? "text-success" : "text-danger",
            avatar:
              item.reference_type === "gift" ? (
                <PlusOutlined />
              ) : (
                <MinusOutlined />
              ),
            description: item.description,
            textclass:
              item.reference_type === "gift"
                ? "text-fill"
                : "text-light-danger",
            date: FromStringToDate(item.date),
          },
        ],
      });
    });
    setData(temp);
  }

  if (!data) {
    return <Spinner></Spinner>;
  }

  return (
    <Fragment>
      <Card
        style={{ marginBottom: 20 }}
        bordered={true}
        bodyStyle={{ paddingTop: 0 }}
        className="header-solid h-full  ant-list-yes criclebox"
        title={<h6 className="font-semibold m-0">Your Transactions</h6>}
      >
        {data.map((item, index) => {
          return (
            <List
              key={index}
              className="transactions-list ant-newest"
              itemLayout="horizontal"
              dataSource={item.data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size="small"
                        className={item.textclass}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={
                      <div>
                        <div>{item.date}</div>
                        <div>{item.description}</div>
                      </div>
                    }
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
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <Pagination
          onChange={(e) => setCurrentPage(e)}
          defaultCurrent={currentPage}
          total={totalPage}
        />
      </div>
    </Fragment>
  );
}
