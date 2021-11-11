import React from "react";
import { Card, Descriptions, Typography } from "antd";
import { useHistory } from "react-router";


interface IProfile {
  memberCode: string;
  username: string;
  name: string;
}

export default function ProfileComponent(props: IProfile) {
  const { Title } = Typography;
  const history = useHistory()

  return (
    <Card
      bordered={false}
      title={<h6 className="font-semibold m-0">Profile Information</h6>}
      className="header-solid h-full card-profile-information"
      bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
    >
      <Descriptions>
        <Descriptions.Item label="Kode Member" span={3}>
          {props.memberCode}
        </Descriptions.Item>
        <Descriptions.Item label="Username" span={3}>
          {props.username}
        </Descriptions.Item>
        <Descriptions.Item label="Nama" span={3}>
          {props.name}
        </Descriptions.Item>
        <Descriptions.Item label="Password" span={3}>
          <span
            onClick={() => history.push('/password-reset')}
            style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
          >
            Change Password
          </span>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
