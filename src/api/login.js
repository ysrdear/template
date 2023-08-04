import { BASE_PRE } from "@/utils/base";

const login = {};

login.login = {
  url: BASE_PRE + "sso/login",
  method: "post",
};

export default login;
