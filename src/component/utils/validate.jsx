export const formValidate = (name, email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim());
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.trim());

  const isNameValid =
    name === null ||
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name.trim()
    );
  if (!isEmailValid) return "⛒ Email isnt valid";
  if (!isPasswordValid) return "⛒ Password isnt valid";
  if (!isNameValid) return "⛒ Name isnt valid";

  return null;
};
