import { Button, Card, Input, notification, Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import Spinner from "../spinner/Spinner";
import ForgotPasswordService from "./service/ForgotPasswordService";

interface IForgotPassword {
  onSubmit: Function;
}

export default function ForgotPassword(props: IForgotPassword) {
  const Service = new ForgotPasswordService();
  const history = useHistory()
  const { token } = useParams<{ token: string }>();
  const { Title } = Typography;
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [isFetch, setIsFetch] = useState(false);

  async function sendForgot() {
    if (!token) {
      if (email) {
        setIsFetch(true);
        const results = await Service.SendForgotCode(email);
        setIsFetch(false);
        const msg =
        results.statusCode === 200
            ? "Silahkan Periksa Email Untuk Reset Password"
            : results.error_message;
        notification.info({
          message: msg,
          placement: "bottomRight",
          duration: 3000,
        });
      }
    } else {
      if (password && confirmPassword) {
        setIsFetch(true);
        const results = await Service.ChangePassword(
          token,
          password,
          confirmPassword
        );
        setIsFetch(false);
        const msg =
        results.statusCode === 200
            ? "Berhasil mengubah password"
            : results.error_message;
        notification.info({
          message: msg,
          placement: "bottomRight",
          duration: 3000,
        });
        if (results.statusCode === 200) {
          history.push('/sign-in')
        }
      }
    }
  }

  return (
    <Card>
      {token ? (
        <div style={{ width: "100%" }}>
          <Title className='font-regular text-muted' level={5}>
            Password Baru
          </Title>
          <Input
            type='password'
            style={{ marginBottom: 10, width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
            size='small'></Input>
          <Title className='font-regular text-muted' level={5}>
            Confirm Password Baru
          </Title>
          <Input
            type='password'
            style={{ marginBottom: 10, width: "100%" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size='small'></Input>
        </div>
      ) : (
        <div>
          <Title className='font-regular text-muted' level={5}>
            Masukan Email Anda
          </Title>
          <Input
            style={{ marginBottom: 10, width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
            size='small'></Input>
        </div>
      )}
      {isFetch ? (
        <Spinner></Spinner>
      ) : (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => sendForgot()}
            type='primary'
            style={{ marginTop: 10 }}>
            Kirim
          </Button>
        </div>
      )}
    </Card>
  );
}
