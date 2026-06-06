import { useState } from "react";

function Login() {
  const [FullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [conformMobileNumber, setconformMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FullName :", FullName);
    console.log("email :", email);
    console.log("MobileNumber :", MobileNumber);
    console.log("conformMobileNumber :", conformMobileNumber);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Contact Us</h1>
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
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
            <label htmlFor="conformMobileNumber">conformMobileNumber</label>
            <input
              type="text"
              name="conformMobileNumber"
              className="form-control"
              value={conformMobileNumber}
              onChange={(e) => setconformMobileNumber(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;