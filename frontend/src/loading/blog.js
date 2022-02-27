import ReactLoading from "react-loading";
import "./style.css";
import logo from "./logo.jpg";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div id="slide1">
          <img className="logo" src={logo} alt="" />
          <p className="brand">tush_tr</p>
        </div>
        <ReactLoading
          type="bubbles"
          color="rgb(51, 152, 185)"
          height="10%"
          width="10%"
          delay="5"
        />
        <div id="slide2">
            <p className="intro">Loading content</p>
        </div>
      </div>
    </div>
  );
};
export default Loading;