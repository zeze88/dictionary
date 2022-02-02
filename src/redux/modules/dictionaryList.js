import { db } from "../../firebase";
import {
  addDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// ======================= action type =======================
// ======================= action type =======================

const LOAD = "dictionary/LOAD";
const CREATEDIC = "dictionary/CREATEDIC";
const EDITDIC = "dictionary/EDITDIC";
const DELETEDIC = "dictionary/DELETEDIC";
const LIKEIT = "dictionary/LIKEIT";

const initialState = {
  list: [],
  target_dic: {},
};

// ======================= action Creator =======================
// ======================= action Creator =======================

export function loadDictionary(dic_list) {
  return { type: LOAD, dic_list };
}
export function createDic(dic_list) {
  return { type: CREATEDIC, dic_list };
}
export function editDic(dic_list, dic_idx) {
  return { type: EDITDIC, dic_list, dic_idx };
}
export function deleteDic(dic_idx) {
  return { type: DELETEDIC, dic_idx };
}
export function likeIt(dic_idx) {
  return { type: LIKEIT, dic_idx };
}
// ======================= middlewares =======================
// ======================= middlewares =======================
// firestore와 통신
// 사전 firestore에서 불러오기
export const loadDicFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    let dic_list = [];

    dictionary_data.forEach((d) => {
      dic_list.push({ id: d.id, ...d.data() });
    });
    console.log(dic_list);

    dispatch(loadDictionary(dic_list));
  };
};

//사전 추가하기
export const createDicFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);

    const dictionary_data = { id: docRef.id, ...dictionary };
    dispatch(createDic(dictionary_data));
  };
};

//사전 수정하기
export const editDicFB = (dic_list) => {
  //추가하는 것도 비동기
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dic_list.id);
    await updateDoc(docRef, dic_list);
    console.log(dic_list);
    const _dictionary_list = getState().dictionaryList.list;
    const dictionary_list = _dictionary_list.findIndex((v) => {
      return v.id === dic_list.id;
    });
    dispatch(editDic(dic_list, dictionary_list));
    return dictionary_list;
  };
};

//사전 삭제하기
export const deleteDicFB = (dic_id) => {
  //추가하는 것도 비동기
  return async function (dispatch, getState) {
    if (!dic_id) {
      alert("아이디가 존재하지 않습니다!");
      return;
    }
    const docRef = doc(db, "dictionary", dic_id);
    await deleteDoc(docRef);

    const _dictionary_list = getState().dictionaryList.list;
    const dictionary_list = _dictionary_list.findIndex((v) => {
      return v.id === dic_id;
    });
    dispatch(deleteDic(dictionary_list));
  };
};

//사전 좋아요
export const likeItDicFB = (dic_list) => {
  //추가하는 것도 비동기
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dic_list.id);
    const isLikeIt = dic_list.like_it;
    const _dictionary_list = getState().dictionaryList.list;
    const dictionary_list = _dictionary_list.findIndex((v) => {
      return v.id === dic_list.id;
    });
    await updateDoc(docRef, { like_it: !isLikeIt });
  };
};

// ======================= redux =======================
// ======================= redux =======================

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.dic_list };
    }
    case "dictionary/CREATEDIC": {
      const newList = [...state.list, action.dic_list];
      return { ...state, list: newList };
    }
    case "dictionary/EDITDIC": {
      const newDicList = state.list.map((v, idx) => {
        if (idx === parseInt(action.dic_idx)) {
          return action.dic_list;
        } else {
          return v;
        }
      });
      return { ...state, list: newDicList };
    }
    case "dictionary/DELETEDIC": {
      const delDicList = state.list.filter((v, idx) => {
        return idx !== action.dic_idx;
      });

      return { ...state, list: delDicList };
    }
    case "dictionary/LIKEIT": {
      const isLikeIt = state.list[action.dic_idx].like_it;
      const likeTarget = state.list.map((v, idx) => {
        if (idx === action.dic_idx) {
          return { ...v, like_it: !isLikeIt };
        } else {
          return { ...v };
        }
      });
      return { ...state, list: likeTarget };
    }
    default:
      return state;
  }
}
