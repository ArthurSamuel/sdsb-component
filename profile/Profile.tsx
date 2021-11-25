import React, { useEffect, useState } from "react";
import { Card, Descriptions } from "antd";
import ProfileService from './service/ProfileService'
interface IProfile {
  onChangePassword: Function;
  onChangePIN: Function;
}

export default function ProfileComponent(props: IProfile) {
  const Service = new ProfileService()
  const [kode, setKode] = useState('...')
  const [username, setUsername] = useState('...')
  const [name, setName] = useState('...')

  useEffect(() => {
    getProfile()
  },[])

  async function getProfile() {
    const results = await Service.GetProfile()
    setKode(results.data.member.code)
    setName(results.data.name)
    setUsername(results.data.username)
  }

  return (
    <Card
      bordered={false}
      title={<h6 className="font-semibold m-0">Profile Information</h6>}
      className="header-solid h-full card-profile-information"
      bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
    >
      <Descriptions>
        <Descriptions.Item label="Kode Member" span={3}>
          {kode}
        </Descriptions.Item>
        <Descriptions.Item label="Username" span={3}>
          {username}
        </Descriptions.Item>
        <Descriptions.Item label="Nama" span={3}>
          {name}
        </Descriptions.Item>
        <Descriptions.Item label="Password" span={3}>
          <span
            onClick={() => props.onChangePassword()}
            style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
          >
            Change Password
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="PIN" span={3}>
          <span
            onClick={() => props.onChangePIN()}
            style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
          >
            Change PIN
          </span>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
