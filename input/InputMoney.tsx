import { Input } from "antd";
import React, { Fragment, useEffect, useState } from "react";

interface IInputMoney {
  onChange: Function;
  addOnBefore?: string;
  value?: string | null;
  label?: string;
  readonly?: boolean;
}

export default function InputMoney(props: IInputMoney) {
  const [amount, setAmount] = useState<string>();

  useEffect(() => {
    if (props.value) {
      setAmount(convertToMoneyFormat(props.value));
    }
  }, [props]);

  useEffect(() => {
    let temp = amount?.replaceAll(".", "");
    props.onChange(temp);
  }, [amount]);

  function convertToMoneyFormat(target: string) {
    let temp = target.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return temp;
  }

  function onChange(e: string) {
    let temp = e.replaceAll(".", "");
    temp = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setAmount(temp);
  }

  return (
    <Fragment>
      <div style={{ width: '100%', marginBottom: 10 }}>
        <span style={{ fontSize: 15, fontWeight: "bold" }}>
          {props.label}
        </span>
      </div>
      <Input
        disabled={props.readonly}
        addonBefore={props.addOnBefore}
        style={{marginBottom: 10}}
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        size="small"
      ></Input>
    </Fragment>
  );
}
