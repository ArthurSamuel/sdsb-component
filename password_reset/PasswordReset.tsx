import React, { useState } from "react";
import { Button, Input } from "antd";
import PasswordResetService from "./service/PasswordResetService";

interface IPasswordReset {
  onSubmit: Function
}

export default function PasswordReset(props: IPasswordReset) {
  const Service = new PasswordResetService();
  const [oldPassword, setOldPassword] = useState<string>();
  const [currentPassword, setCurrentPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  async function changePassword() {
    const results = await Service.UpdatePassword(
      oldPassword,
      currentPassword,
      confirmPassword
    );
    props.onSubmit(results)
  }

  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Lama</h3>
          <Input
            type={'password'}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Password Lama"
          ></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Baru</h3>
          <Input
            type={'password'}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Password Baru"
          ></Input>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h3>Password Baru (Ulangi)</h3>
          <Input
            type={'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password Baru"
          ></Input>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => changePassword()} type="primary">
            Ganti Password
          </Button>
        </div>
      </div>
    </section>
  );
}
