import {ADMIN} from "../AppConstant.js";
import {useSelector} from "react-redux";
import {selectUserRole} from "../../features/user/UserSlice.js";

export const useAuthor = () => {
  const userRole = useSelector(selectUserRole);
  return userRole?.includes(ADMIN);
}
