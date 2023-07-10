import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Sarayu_River_night_view%2C_Ayodhya_001.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpCity">Ayodhya</span>
        <span className="fpName">Area code: +91-5278</span>
        <span className="fpPrice">Demonyms: Ayodhyawasi, Awadhwasi</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.citizenmatters.in/wp-content/uploads/sites/2/2020/05/29111106/Ganga-Aarti-Varanasi.jpg?strip=all&lossy=1&ssl=1"
          alt=""
          className="fpImg"
        />
        <span className="fpCity">Varanasi</span>
        <span className="fpName">Area code: 0542</span>
        <span className="fpPrice">reffered as Shiv Bhumi, Banaras</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipO-IWuns7oe7SOowzh3mZiIqKdvvDoX9dJzYPEK=s1360-w1360-h1020"
          alt=""
          className="fpImg"
        />
        <span className="fpCity">DwarkaDhish</span>
        <span className="fpName">Area code: 2892</span>
        <span className="fpPrice">One of The Char Dham in Bharat</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.savaari.com/blog/wp-content/uploads/2022/11/Konark-Sun-Temple-Wheel.webp"
          alt=""
          className="fpImg"
        />
        <span className="fpCity">Konark Sun Temple</span>
        <span className="fpName">Area code: 2892</span>
        <span className="fpPrice">One of the main site of Incredible India</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;