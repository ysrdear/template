export const getResData = (res) => {
  return res.data ? res.data : res;
};

export const validateRes = (res) => {
  if (
    /\.(gif|jpg|jpeg|png|excel|pdf|word|ms-excel)/.test(
      res.headers["content-type"]
    )
  )
    return true;
  return res && res.data && res.data.code === "1200";
};

export const isFile = (res) => {
  if (
    /\.(gif|jpg|jpeg|png|excel|pdf|word|ms-excel)/.test(
      res.headers["content-type"]
    )
  ) {
    return true;
  }
  return false;
};
