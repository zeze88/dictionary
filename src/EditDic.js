import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editDicFB } from "./redux/modules/dictionaryList";
import { Form, Input, Button } from "antd";
import { InputWrap } from "./CreateDic";

const EditDic = (props) => {
  const [Inputs, setInputs] = React.useState({});
  const navigate = useNavigate();
  const params = useParams();
  const uploadDic = useDispatch();
  const dicList = useSelector((state) => state.dictionaryList.list);

  const editDicList = dicList.filter((v) => {
    let target = "";
    if (v.id === params.index) {
      target = [v];
    }
    return target;
  })[0];

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...editDicList,
      [name]: value,
    });
  };

  return (
    <InputWrap>
      <Form>
        <Form.Item
          label="단어"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="title"
            defaultValue={editDicList ? editDicList.title : ""}
          />
        </Form.Item>
        <Form.Item
          label=" 발음"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="pronounce"
            defaultValue={editDicList ? editDicList.pronounce : ""}
          />
        </Form.Item>
        <Form.Item
          label="의미"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="meaning"
            defaultValue={editDicList ? editDicList.meaning : ""}
          />
        </Form.Item>
        <Form.Item
          label="예문"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="example"
            defaultValue={editDicList ? editDicList.example : ""}
          />
        </Form.Item>
        <Form.Item
          label="해석"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="translate"
            defaultValue={editDicList ? editDicList.translate : ""}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            uploadDic(editDicFB(Inputs));
            // uploadDic(editDic(Inputs, params.index));
            navigate("/");
          }}>
          Submit
        </Button>
      </Form>
    </InputWrap>
  );
};

export default EditDic;
