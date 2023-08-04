import axiosInstance from "./fetch";

import login from "@/api/login";

export const getLogin = (data) => axiosInstance(login.login, data);
