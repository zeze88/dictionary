import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDicFB } from "./redux/modules/dictionaryList";

import styled from "styled-components";
import { Form, Input, Button } from "antd";

const CreateDic = (props) => {
  const navigate = useNavigate();
  const uploadDic = useDispatch();

  const [Inputs, setInputs] = React.useState({
    title: "",
    pronounce: "",
    meaning: "",
    example: "",
    translate: "",
    like_it: false,
  });

  const { title, pronounce, meaning, example, translate } = Inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };
  return (
    <InputWrap>
      <Form>
        <Form.Item
          label="단어"
          value={title}
          onChange={onChange}
          rules={[{ required: true }]}>
          <Input name="title" />
        </Form.Item>
        <Form.Item
          label=" 발음"
          rules={[{ required: true }]}
          value={pronounce}
          onChange={onChange}>
          <Input name="pronounce" />
        </Form.Item>
        <Form.Item
          label="의미"
          rules={[{ required: true }]}
          value={meaning}
          onChange={onChange}>
          <Input name="meaning" />
        </Form.Item>
        <Form.Item
          label="예문"
          rules={[{ required: true }]}
          value={example}
          onChange={onChange}>
          <Input name="example" />
        </Form.Item>
        <Form.Item
          label="해석"
          rules={[{ required: true }]}
          value={translate}
          onChange={onChange}>
          <Input name="translate" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            navigate("/");
            uploadDic(createDicFB(Inputs));
          }}>
          Submit
        </Button>
      </Form>
    </InputWrap>
  );
};

export const InputWrap = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export default CreateDic;
