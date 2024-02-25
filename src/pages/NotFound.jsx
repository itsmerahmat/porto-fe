const NotFound = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404</h1>
            <h3 className="text-2xl font-semibold py-6">Not Found</h3>
            <p className="">
              Oops, something went wrong. Sorry, we could not find your page.
            </p>
            {/* <button className="btn btn-primary">Home</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
