import React from "react";
import { Button, Input } from "antd";

export default function PinReset() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: 20 }}>
          <h3>PIN Lama</h3>
          <Input placeholder="Password Lama"></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>PIN Baru</h3>
          <Input placeholder="Password Baru"></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>PIN Baru (Ulangi)</h3>
          <Input placeholder="Password Baru"></Input>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary">Ganti PIN</Button>
        </div>
      </div>
    </section>
  );
}
