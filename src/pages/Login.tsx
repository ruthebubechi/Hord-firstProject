export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="d-flex flex-column">
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
