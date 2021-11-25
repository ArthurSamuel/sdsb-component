import React from "react";
import { Spin } from "antd";

interface ISpinner {
  marginTop?: number;
}

export default function Spinner(props: ISpinner) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        marginTop: props.marginTop,
      }}>
      <Spin></Spin>
    </div>
  );
}
