import React, { Component } from "react";
import { Button, Layout, Row, Col,Icon  } from "antd";
const { Content } = Layout;
const ButtonGroup = Button.Group;
class Buttons extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col span={10}>
          <Content
            style={{
              margin: "24px 5px",
              background: "#fff",
              padding: 50,
            }}
          >
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
          </Content>
          </Col>
          <Col span={14}>
          <Content
            style={{
              margin: "24px 5px",
              padding: 50,
              background: "#fff",
            }}
          >
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">Search</Button>
          </Content>
          </Col>
          </Row>
          <Content
            style={{
              margin: "24px 16px",
              padding: 30,
              background: "#fff",
            }}
          >
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button>M</Button>
            <Button type="dashed">R</Button>
          </ButtonGroup>
      
          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
          </Content>
          <style>
          {
              `
              .ant-btn{
                  margin:10px
              }
              .ant-layout-content{
                    min-height:200px
              }
              `
          }
          </style>
      </div>
    );
  }
}

export default Buttons;
