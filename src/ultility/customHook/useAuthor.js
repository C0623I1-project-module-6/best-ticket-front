import {useEffect, useState} from "react";
import {ADMIN} from "../AppConstant.js";

export const useAuthor = () => {
  const userRole = JSON.parse(localStorage.getItem("user")).listRole;
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    userRole.forEach((e) => {
      if (e === ADMIN) {
        setIsAdmin(true)
        console.log(isAdmin)
      }
    })
  }, [isAdmin]);
  console.log(isAdmin)
  return isAdmin;
}
