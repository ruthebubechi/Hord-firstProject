export function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <div className="d-flex flex-column">
        <input type="text" placeholder="Enter your First Name" />
        <input type="text" placeholder="Enter your Last Name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button>Submit</button>
      </div>
    </div>
  );
}
