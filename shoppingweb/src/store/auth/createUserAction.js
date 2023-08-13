import { getRequest, postRequest } from "../common/crud";

export const fetchExistingUsers = async () => {
  return getRequest(`http://localhost:3500/users`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("Error While Fetching All users", e);
      throw e;
    });
};
export const createUserList = (payload) => async (dispatch) => {
  try {
    const existingUser = await fetchExistingUsers();
    const isUserExist = existingUser.some((items, index) => {
      return items.email === payload.email;
    });
    if (isUserExist) {
      console.log("User Already Exists");
    } else {
      return postRequest(`http://localhost:3500/users`, payload)
        .then((response) => {
          if (response.status === 201) {
            console.log("Data Added successfully", response.data);
            return response;
          } else {
            console.log("Error Adding Data");
          }
          return response;
        })
        .catch((e) => {
          console.log("Error in Create User", e);
        });
    }
  } catch (error) {
    console.log("Error", error);
  }
};
