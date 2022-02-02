import React from "react";
import styled from "styled-components";

import { Space, Spin } from "antd";

const Spinner = () => {
  return (
    <SpinnerWrap>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </SpinnerWrap>
  );
};

const SpinnerWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(131deg, #e7ffc1, #12ed4c);
  .ant-space-align-center {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

export default Spinner;
