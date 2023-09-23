import banner from '../../../../../assets/bg.png'

const Banner = () => {
    return (
      <div
        className="bg-image d-flex flex-column justify-content-center align-items-center text-white p-5 text-center"
        style={{
          backgroundImage: `url(${banner})`,
        //   minHeight: "300px", // Set an appropriate height
        }}
      >
        <h1>Create an Amazing Newspaper</h1>
        <p className='my-4'>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-info btn-lg text-dark">Learn More</button>
      </div>
    );
};

export default Banner;