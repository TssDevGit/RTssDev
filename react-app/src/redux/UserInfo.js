// import authentication from "../B2C";

// export const USERNAME= authentication.getUserEmail;
// console.log("fsfssf",USERNAME)
// export const userinfoname = username =>({type:USERNAME,username});

// const initalState ={
//   username : 0
// };

// const userinfo =(state = initalState,action)=>{
//   switch(action.type){
//     case USERNAME:
//       return{
//         ...state,
//         username:action.username
//       };
//       default:
//         return state;
//   }
// }
// export default userinfo;

export const INCRESE = "COUNT/INCRESE";
export const increseCount = count =>({type :INCRESE,count});
const initalState ={
  count :localStorage.getItem("userInfoEmail")
};
const counter=(state=initalState,action)=>{
  switch(action.type){
    case INCRESE:
      return{
        ...state,
        count : action.count
      };
      default :
      return state;
  }
}
export default counter;