import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.houseofhiranandani.com/data-content/project_location/15.jpg"
          alt="logo"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bengaluru</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://assets.thehansindia.com/h-upload/2023/05/09/1350486-ooo.webp"
          alt="logo2"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>BhagyaNagar</h1>
          <p>(Hyderabad)</p>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://teja12.kuikr.com/is/p/t20/1280x800/public/images/gallery/city_masthead/372/Gurgaon_Masthead_1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gurugram</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;