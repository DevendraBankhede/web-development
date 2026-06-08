
function Home() {
  return (
    <>
          <h1 className="d-flex justify-content-center align-items-center mt-5 pt-5">Your Favorite Food, Delivered Fast</h1>
           <p className="d-flex justify-content-center align-items-center">Order from thousands of restaurants and get it delivered to your doorstep</p>

           <div className="d-flex justify-content-center align-items-center gap-4">
              <button type="submit" className="btn btn-danger">
                Sing Up
              </button>

              <button type="submit" className="btn btn-primary">
                Order Now
              </button>
            </div>
    </>
  );
}
export default Home;
