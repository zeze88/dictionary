import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDicFB } from "./redux/modules/dictionaryList";
import styled from "styled-components";
import "./App.css";

import Home from "./Home";
import CreateDic from "./CreateDic";
import EditDic from "./EditDic";
import NotFound from "./NotFound";

function App() {
  const dispatch = useDispatch();

  React.useEffect(async () => {
    dispatch(loadDicFB());
  }, [dispatch]);

  return (
    <div className="App">
      <AppWrap>
        <h1>
          <Link to="/">Make a Dictionary</Link>
        </h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateDic />}></Route>
          <Route path="/edit/:index" element={<EditDic />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </AppWrap>
    </div>
  );
}
const AppWrap = styled.div`
  padding: 30px;
  h1 {
    padding-bottom: 20px;
    text-align: center;
    border-style: solid;
    border-width: 0px 0px 1px;
    border-image: linear-gradient(
        to right,
        rgb(106, 226, 100),
        rgb(101, 210, 250),
        rgb(64, 144, 247)
      )
      1 / 1 / 0 stretch;
    cursor: pointer;

    a {
      font-size: 50px;
      color: #626262;
      font-family: "Comforter", cursive;
    }
  }
`;
export default App;
