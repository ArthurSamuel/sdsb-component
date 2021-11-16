import React from "react";
import Card from "antd/lib/card";
import { CreditCardFilled } from "@ant-design/icons";
import "./CardCredit.css"

interface ICardCredit {
  memberCode: string;
  userName: string;
}

export default function CardCredit(props:ICardCredit) {
  return (
    <Card
      style={{borderRadius: 10}}
      title={<CreditCardFilled style={{fontSize: 35}}></CreditCardFilled>}
      bordered={false}
      className="card-credit header-solid h-ful card-credit-background-card"
    >
      <div>Saldo</div>
      <h4 className="card-number" style={{fontSize: 26}}>10.000.000</h4>
      <div className="card-footer">
        <div className="mr-30">
          <p>Nama User</p>
          <h6>{props.userName}</h6>
        </div>
        <div className="mr-30">
          <p>Kode Member</p>
          <h6>{props.memberCode}</h6>
        </div>
      </div>
    </Card>
  );
}
