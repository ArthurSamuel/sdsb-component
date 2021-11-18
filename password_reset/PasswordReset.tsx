import React from "react";
import { Button, Input } from "antd";

export default function PasswordReset() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Lama</h3>
          <Input placeholder="Password Lama"></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Baru</h3>
          <Input placeholder="Password Baru"></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Baru (Ulangi)</h3>
          <Input placeholder="Password Baru"></Input>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary">Ganti Password</Button>
        </div>
      </div>
    </section>
  );
}
