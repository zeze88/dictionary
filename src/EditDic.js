import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editDicFB,
  targetDicFB,
  targetDic,
} from "./redux/modules/dictionaryList";
import { db } from "./firebase";
import {
  addDoc,
  doc,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Form, Input, Button } from "antd";
import { InputWrap } from "./CreateDic";

const EditDic = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const uploadDic = useDispatch();
  const dicList = useSelector((state) => state.dictionaryList.list);
  const targetDic = useSelector((state) => state.dictionaryList.target_dic);

  const editDicList = dicList.filter((v) => {
    if (v.id === params.index) {
      return v;
    }
  })[0];
  const [Inputs, setInputs] = React.useState({
    id: editDicList.id ? editDicList.id : "",
    title: editDicList.title ? editDicList.title : "",
    pronounce: editDicList.pronounce ? editDicList.pronounce : "",
    meaning: editDicList.meaning ? editDicList.meaning : "",
    example: editDicList.example ? editDicList.example : "",
    translate: editDicList.translate ? editDicList.translate : "",
    like_it: editDicList.like_it ? editDicList.like_it : "",
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
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input name="title" defaultValue={Input.title} />
        </Form.Item>
        <Form.Item
          label=" 발음"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="pronounce"
            defaultValue={editDicList.pronounce ? editDicList.pronounce : ""}
          />
        </Form.Item>
        <Form.Item
          label="의미"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="meaning"
            defaultValue={editDicList.meaning ? editDicList.meaning : ""}
          />
        </Form.Item>
        <Form.Item
          label="예문"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="example"
            defaultValue={editDicList.example ? editDicList.example : ""}
          />
        </Form.Item>
        <Form.Item
          label="해석"
          rules={[{ required: true }]}
          onChange={onChange}>
          <Input
            name="translate"
            defaultValue={editDicList.translate ? editDicList.translate : ""}
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
