import React from "react";
import Card from "antd/lib/card";
import { MoneyCollectOutlined } from "@ant-design/icons";

interface ICardCredit {
  memberCode: string;
  userName: string;
}

export default function CardCredit(props:ICardCredit) {
  return (
    <Card
      title={<MoneyCollectOutlined></MoneyCollectOutlined>}
      bordered={false}
      className="card-credit header-solid h-ful"
    >
      <div>Kode Member</div>
      <h5 className="card-number">{props.memberCode}</h5>
      <div className="card-footer">
        <div className="mr-30">
          <p>Nama User</p>
          <h6>{props.userName}</h6>
        </div>
      </div>
    </Card>
  );
}
