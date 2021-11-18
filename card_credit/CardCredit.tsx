import React, { useEffect, useState } from "react";
import Card from "antd/lib/card";
import { CreditCardFilled } from "@ant-design/icons";
import CardCreditService from './service/CardCreditService'
import "./CardCredit.css"
interface ICardCredit {
  memberCode: string;
  userName: string;
}

export default function CardCredit(props:ICardCredit) {
  const Service = new CardCreditService()
  const [credit, setCredit] = useState<string>('Rp ...')

  useEffect(() => {
    getCredit()
  },[])

  async function getCredit() {
    const results = await Service.GetCredit()
    let temp = `Rp ${results.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    setCredit(temp)
  }

  return (
    <Card
      style={{borderRadius: 10}}
      title={<CreditCardFilled style={{fontSize: 35}}></CreditCardFilled>}
      bordered={false}
      className="card-credit header-solid h-ful card-credit-background-card"
    >
      <div>Saldo</div>
      <h4 className="card-number" style={{fontSize: 26}}>
        {credit}
      </h4>
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
