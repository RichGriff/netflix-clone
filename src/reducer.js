export const initialState = {
  userList: []
};

export const actionTypes = {
  SET_USERLIST: "SET_USERLIST"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USERLIST:
      return {
        ...state,
        userList: action.userList
      };
    default:
      return state;
  }
};

export default reducer;
