import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  likeItDicFB,
  deleteDicFB,
  getTargetDic,
  targetDicFB,
} from "./redux/modules/dictionaryList";

import styled from "styled-components";

import { Row, Col, Card, Space, Button } from "antd";
import {
  CheckCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dicInfo = useSelector((state) => state.dictionaryList.list);
  const targetDic = useSelector((state) => state.dictionaryList);

  return (
    <>
      <form>
        <Row gutter={16}>
          {dicInfo.map((list, idx) => {
            return (
              <Col className="gutter-row" span={6} key={idx}>
                <DicCardWrap isLikeIt={list.like_it}>
                  <Card
                    style={{ marginTop: 16 }}
                    title={list.title}
                    actions={[
                      <Space>
                        <CheckCircleOutlined
                          key="check"
                          onClick={() => {
                            dispatch(likeItDicFB(list));
                          }}
                          style={list.like_it ? { color: "red" } : {}}
                        />
                      </Space>,
                      <EditOutlined
                        key="edit"
                        onClick={() => {
                          // dispatch(targetDicFB(list.id));
                          navigate(`/edit/${list.id}`);
                        }}
                      />,
                      <DeleteOutlined
                        key="delete"
                        style={{ color: "red" }}
                        onClick={() => {
                          dispatch(deleteDicFB(list.id));
                        }}
                      />,
                    ]}>
                    <Cardwrap>
                      <span>{list.pronounce}</span>
                      <p>{list.meaning}</p>
                      <div>{list.example}</div>
                      <div>{list.translate}</div>
                    </Cardwrap>
                  </Card>
                </DicCardWrap>
              </Col>
            );
          })}
        </Row>
        <CreateDivButton>
          <Button
            value="large"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate(`/create`);
            }}
          />
        </CreateDivButton>
      </form>
    </>
  );
};
const DicCardWrap = styled.div`
  word-break: break-all;
  .ant-card-actions {
    border-radius: 4px;

    li span {
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  ${({ isLikeIt }) =>
    isLikeIt &&
    `
    .ant-card-bordered {
      transition:all .3s;
      border: 1px solid #4c8bff;
      border-radius: 4px;
      box-shadow:0 0 10px 0px #d5d5d5;
    }
    `}
`;
const Cardwrap = styled.div`
  span {
    color: #a19c9c;
  }

  div {
    color: #0984e3;
  }
`;

const CreateDivButton = styled.div`
  position: fixed;
  bottom: 4vh;
  right: 6vw;

  .ant-btn-icon-only {
    width: 50px;
    height: 50px;
  }
`;
export default Home;
