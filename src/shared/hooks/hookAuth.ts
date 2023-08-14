export const useAuth = () => {
  const isLogin = JSON.parse(localStorage.getItem("userNetflix") as string);
  const isSaves = JSON.parse(localStorage.getItem("savesNetflix") as string);

  if (isLogin === null && isSaves === null) {
    return () => {
      localStorage.setItem(
        "userNetflix",
        JSON.stringify({
          firstName: "",
          password: null,
          email: "",
        }),
      );
      localStorage.setItem("savesNetflix", "[]");
    };
  }

  return () => {
    return null;
  };
};
