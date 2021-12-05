import React, { Fragment, useEffect, useState } from "react";
import Card from "antd/lib/card";
import { Avatar, List, Pagination } from "antd";
import { ITransactionGroup } from "./model/HistoryTranscationModel";
import { HistoryTransactionService } from "./service/HistoryTransactionService";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FromStringToDate, CreditToString } from "../../../utils/Helper";
import Spinner from "../spinner/Spinner";

interface IHistoryTransaction {
  idMember: string;
  fetchAgain?: boolean;
  onFetchAgain?: Function;
}

export default function HistoryTransaction(props: IHistoryTransaction) {
  const Service = new HistoryTransactionService();
  const [data, setData] = useState<ITransactionGroup[] | null>(null);
  const [totalPage, setTotalPage] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getHistoryData();
  }, [currentPage]);

  useEffect(() => {
    fetchAgain()
  },[props])

  async function fetchAgain() {
    if (props.fetchAgain && props.onFetchAgain) {
      await getHistoryData()
      props.onFetchAgain()
    }
  }

  async function getHistoryData() {
    const results = await Service.GetHistory(currentPage);
    setTotalPage(results.data.total);
    let temp: ITransactionGroup[] = [];
    results.data.data.forEach((item) => {
      let tempProcessAmount = parseInt(item.amount);
      let tempTitle =
        item.reference_type === "gift"
          ? item.giver ? `Gift From ${item.giver.name}` : 'Bonus'
          : `Transfer To ${item.member.name}`;
      if (
        item.reference_type === "transfer" &&
        item.member_id === props.idMember
      ) {
        tempProcessAmount = tempProcessAmount * -1;
        tempTitle = `Transfer From ${item.giver.name}`;
      }
      temp.push({
        date: item.date,
        data: [
          {
            title: tempTitle,
            amount: CreditToString(tempProcessAmount.toString()),
            amountcolor: tempProcessAmount > 0 ? "text-success" : "text-danger",
            avatar:
              tempProcessAmount > 0 ? <PlusOutlined /> : <MinusOutlined />,
            description: item.description,
            textclass:
              tempProcessAmount > 0 ? "text-fill" : "text-light-danger",
            date: FromStringToDate(item.date),
          },
        ],
      });
    });
    setData(temp);
  }

  if (!data) {
    return <Spinner marginTop={40}></Spinner>;
  }

  if (data.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <h3>Tidak ada data transaksi</h3>
      </div>
    );
  }

  return (
    <div>
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
    </div>
  );
}
