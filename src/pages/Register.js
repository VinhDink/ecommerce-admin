import "../styles/register.css";

const Register = () => {
  return (
    <div class="register">
      <h1 class="register__title">Create an account</h1>
      <form class="register__form">
        <label class="register__label">Username</label>
        <input type="text" class="register__input" />
        <label class="register__label">Password</label>
        <input type="password" class="register__input" />
        <label class="register__label">Confirm Password</label>
        <input type="password" class="register__input" />
        <button type="submit" class="register__button">
          Create account
        </button>
      </form>
      <div class="register__term">
        By signing in or creating an account, you agree with our Terms &
        conditions and Privacy statement
      </div>
    </div>
  );
};

export default Register;
