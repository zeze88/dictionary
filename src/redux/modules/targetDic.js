// import dictionaryList from "./dictionaryList";
// import { db } from "../../firebase";
// import {
//   addDoc,
//   doc,
//   collection,
//   getDocs,
//   deleteDoc,
//   updateDoc,
// } from "firebase/firestore";
// const initialState = {
//   target_dic: {},
// };

// const TARGETDIC = "dictionary/TARGETDIC";

// export function getTargetDic(dic_id) {
//   return { type: TARGETDIC, dic_id };
// }

// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case "dictionary/TARGETDIC": {
//       const targetDic = dictionaryList.list;
//       //   .filter((v) => {
//       //     return v.id === action.dic_id ? v : null;
//       //   });
//       console.log(targetDic);
//       return state;
//       // return { ...state, target_dic: targetDic };
//     }
//     default:
//       return state;
//   }
// }
