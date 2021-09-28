import { ActionTypes } from "../constants/action-types";

const initialUsers = JSON.parse(store("users")) || [
  {
    userName: "Sikandar",
    email: "sik@gmail.com",
    password: "12345",
  },
  {
    userName: "ali",
    email: "ali@gmail.com",
    password: "98765",
  },
];

const loggedInUser = JSON.parse(store("loggedInUser")) || {};

if (isNull(store("users"))) {
  store("users", JSON.stringify(initialUsers));
}
if (isNull(store("loggedInUser"))) {
  store("loggedInUser", JSON.stringify(loggedInUser));
}
function isNull(val) {
  //helper function
  if (val === "undefined" || val === null || val === undefined || val === "") {
    return true;
  } else {
    return false;
  }
}

function store(key, value) {
  if (typeof Storage !== "undefined" && typeof value !== "undefined") {
    localStorage.setItem(key, value);
  }

  if (value === undefined) {
    var data;
    if (typeof Storage !== "undefined") {
      data = localStorage.getItem(key);
    }
    return data;
  }
}
export const userSignupReducer = (state = initialUsers, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_SIGNUP: {
      const findUser = initialUsers.filter(
        (user) => user.email === payload.email
      );
      if (findUser.length === 0) {
        initialUsers.push(payload); //append payload to start of stories array
        store("users", JSON.stringify(initialUsers));
        console.log(initialUsers);
      }

      return { ...state }; //copy updated stories to the state
    }

    default:
      return state;
  }
};

export const userLoginReducer = (state = loggedInUser, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_LOGIN: {
      console.log(payload);
      const findUser = initialUsers.filter(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (findUser.length > 0) {
        console.log("user authenticated");
        loggedInUser.email = payload.email;
        loggedInUser.password = payload.password;
        store("loggedInUser", JSON.stringify(payload));
      }
      // state.unshift(payload); //append payload to start of stories array
      // store("users", JSON.stringify(state));
      return { ...state }; //copy updated stories to the state
    }
    case ActionTypes.USER_LOGOUT: {
      console.log(payload);
      state = {};
      // state.unshift(payload); //append payload to start of stories array
      store("loggedInUser", JSON.stringify(state));
      return state; //copy updated stories to the state
    }
    default:
      return state;
  }
};

// export const postReducer = (state = initialPostState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.ADD_POST: {
//       state.unshift(payload);
//       store("posts", JSON.stringify([...state]));
//       return [...state];
//     }
//     case ActionTypes.ADD_COMMENT: {
//       console.log(payload);
//       let temp = [...state];
//       temp.map((list) => {
//         if (list.id === payload.id) {
//           list.comments.unshift(payload.comment);
//         }
//         return list;
//       });
//       store("posts", JSON.stringify(temp));
//       return temp;
//     }
//     case ActionTypes.ADD_LIKE: {
//       console.log(payload);
//       let temp = [...state];
//       temp.map((list) => {
//         if (list.id === payload.id) {
//           list.like = !list.like;
//         }
//         return list;
//       });
//       store("posts", JSON.stringify(temp));
//       return temp;
//     }
//     default:
//       return state;
//   }
// };
