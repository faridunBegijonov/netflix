export const useAuth = () => {
  return () => {
    localStorage.setItem(
      "userNetflix",
      JSON.stringify({
        firstName: "",
        password: null,
        email: " ",
      }),
    );
    localStorage.setItem("savesNetflix", "[]");
  };
};
