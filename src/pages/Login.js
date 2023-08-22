import "../styles/login.css";

const Login = () => {
  return (
    <div class="login">
      <h1 class="login__title">Sign in or create an account</h1>
      <form class="login__form">
        <label class="login__label">Username</label>
        <input type="text" class="login__input" />
        <label class="login__label">Password</label>
        <input type="password" class="login__input" />
        <button type="submit" class="login__button">
          Sign in
        </button>
        <div class="form__register">Create an account</div>
      </form>
      <div class="login__term">
        By signing in or creating an account, you agree with our Terms &
        conditions and Privacy statement
      </div>
    </div>
  );
};

export default Login;