import React, { useState } from "react";
import { Button, Input } from "antd";
import PinResetService from "./service/PinResetService";

interface IPinReset {
  onSubmit: Function;
}

export default function PinReset(props: IPinReset) {
  const Service = new PinResetService();
  const [pin, setPin] = useState<string>();
  const [currentPassword, setCurrentPassword] = useState<string>();

  async function changePin() {
    const results = await Service.UpdatePin(currentPassword, pin);
    props.onSubmit(results);
  }

  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: 20 }}>
          <h3>Password</h3>
          <Input
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
            placeholder="Password"
          ></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>PIN Baru</h3>
          <Input
            onChange={(e) => setPin(e.target.value)}
            type="password"
            placeholder="Password Baru"
          ></Input>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => changePin()} type="primary">
            Ganti PIN
          </Button>
        </div>
      </div>
    </section>
  );
}
