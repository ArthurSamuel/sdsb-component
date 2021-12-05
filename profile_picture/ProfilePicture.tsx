import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Server } from "../../../utils/Constant";
import ProfilePictureService from "./service/ProfilePictureService";

interface IProfilePicture {
  backgroundUrl?: any;
  avatarUrl?: any;
  name: string;
  email: string;
  phone: string;
  onUpdateImage: Function;
}

const pencil = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    key={0}>
    <path
      d='M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z'
      className='fill-gray-7'></path>
    <path
      d='M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z'
      className='fill-gray-7'></path>
  </svg>,
];

export default function ProfilePicture(props: IProfilePicture) {
  const Service = new ProfilePictureService();

  function inputFile() {
    return (
      <div>
        <label htmlFor='file-image' style={{ cursor: "pointer" }}>
          {pencil}
        </label>
        <input
          onChange={(e) => onChangeFile(e)}
          style={{ display: "none" }}
          id='file-image'
          type='file'></input>
      </div>
    );
  }

  async function onChangeFile(e: any) {
    const file = e.target.files[0];
    const results = await Service.EditProfilePicture(
      props.name,
      props.email,
      props.phone,
      file
    );
    console.log(results.data.member.profile_image);
    props.onUpdateImage(results.data.member.profile_image)
  }

  return (
    <section>
      <div
        className='profile-nav-bg'
        style={{ backgroundColor: "#323278" }}></div>
      <Card
        className='card-profile-head'
        extra={inputFile()}
        bodyStyle={{ display: "none" }}
        title={
          <Row justify='space-between' align='middle' gutter={[24, 0]}>
            <Col span={24} md={12} className='col-info'>
              <Avatar.Group>
                <Avatar
                  size={74}
                  shape='square'
                  src={
                    props.avatarUrl ? (
                      `${Server.baseProd}/${props.avatarUrl}`
                    ) : (
                      <UserOutlined style={{ color: "#dedede", fontSize: 40 }} />
                    )
                  }
                />
                <div className='avatar-info'>
                  <h4 className='font-semibold m-0'>{props.name}</h4>
                  <p>Member</p>
                </div>
              </Avatar.Group>
            </Col>
          </Row>
        }></Card>
    </section>
  );
}
