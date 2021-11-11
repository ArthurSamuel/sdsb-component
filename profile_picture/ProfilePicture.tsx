import React from "react";
import { Avatar, Card, Col, Row } from "antd";

interface IProfilePicture {
  backgroundUrl: any;
  avatarUrl: any;
  name: string;
}

export default function ProfilePicture(props: IProfilePicture) {
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  function inputFile() {
    return (
      <div>
        <label htmlFor="file-image" style={{cursor: 'pointer'}}>
          {pencil}
        </label>
        <input onChange={(e) => onChangeFile(e)} style={{display: 'none'}} id="file-image" type="file"></input>
      </div>
    )
  }

  function onChangeFile(e:any) {
    const temp = e.target.files
    console.log(temp)
  }

  return (
    <section>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + props.backgroundUrl + ")" }}
      ></div>
      <Card
        className="card-profile-head"
        extra={inputFile()}
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={props.avatarUrl} />
                <div className="avatar-info">
                  <h4 className="font-semibold m-0">
                    {props.name}
                  </h4>
                  <p>Member</p>
                </div>
              </Avatar.Group>
            </Col>
          </Row>
        }
      ></Card>
    </section>
  );
}
