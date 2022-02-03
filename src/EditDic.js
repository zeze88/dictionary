import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editDicFB } from "./redux/modules/dictionaryList";
import { Form, Input, Button } from "antd";
import { InputWrap } from "./CreateDic";

const EditDic = (props) => {
  // console.log(Inputs);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const dicList = useSelector((state) => state.dictionaryList.list);

  const editDicList = dicList.filter((v) => {
    let target = "";
    if (v.id === params.index) {
      target = [v];
    }
    return target;
  })[0];

  const [Inputs, setInputs] = React.useState({
    id: editDicList ? editDicList.id : "",
    title: editDicList ? editDicList.title : "",
    pronounce: editDicList ? editDicList.pronounce : "",
    meaning: editDicList ? editDicList.meaning : "",
    example: editDicList ? editDicList.example : "",
    translate: editDicList ? editDicList.translate : "",
    like_it: editDicList ? editDicList.like_it : "",
  });

  const setOnchange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...Inputs,
      [name]: value,
    });
  };

  return (
    <InputWrap>
      <Form>
        <Form.Item label="단어" rules={[{ required: true }]}>
          <Input
            name="title"
            defaultValue={editDicList ? editDicList.title : ""}
            onChange={setOnchange}
          />
        </Form.Item>
        <Form.Item label=" 발음" rules={[{ required: true }]}>
          <Input
            name="pronounce"
            defaultValue={editDicList ? editDicList.pronounce : ""}
            onChange={setOnchange}
          />
        </Form.Item>
        <Form.Item label="의미" rules={[{ required: true }]}>
          <Input
            name="meaning"
            defaultValue={editDicList ? editDicList.meaning : ""}
            onChange={setOnchange}
          />
        </Form.Item>
        <Form.Item label="예문" rules={[{ required: true }]}>
          <Input
            name="example"
            defaultValue={editDicList ? editDicList.example : ""}
            onChange={setOnchange}
          />
        </Form.Item>
        <Form.Item label="해석" rules={[{ required: true }]}>
          <Input
            name="translate"
            defaultValue={editDicList ? editDicList.translate : ""}
            onChange={setOnchange}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            dispatch(editDicFB(Inputs));
            // dispatch(editDic(Inputs, params.index));
            navigate("/");
          }}>
          Submit
        </Button>
      </Form>
    </InputWrap>
  );
};

export default EditDic;
