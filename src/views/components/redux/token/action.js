import { Storage } from "../../utils/storage";

export function Action_SetToken (token){
    Storage.setItem("token",token );
    return {
        type: "SET_TOKEN",
        token,
    };
};
