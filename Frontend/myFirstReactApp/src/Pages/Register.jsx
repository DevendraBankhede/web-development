import { useState } from "react";

function Login() {
  const [FullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [conformPassword, setconformPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FullName :", FullName);
    console.log("password :", password);
    console.log("MobileNumber :", MobileNumber);
    console.log("conformPassword :", conformPassword);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Create Account!!!</h1>
          <p className="text-center">Join us as a Customer, Restaurant, or Rider</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="FullName">FullName</label>
            <input
              type="text"
              name="FullName"
              className="form-control"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="conformPassword">conformPassword</label>
            <input
              type="text"
              name="conformPassword"
              className="form-control"
              value={conformPassword}
              onChange={(e) => setconformPassword(e.target.value)}
            />
            <br />
            <label htmlFor="MobileNumber">MobileNumber</label>
            <input
              type="text"
              name="MobileNUmber"
              className="form-control"
              value={MobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;