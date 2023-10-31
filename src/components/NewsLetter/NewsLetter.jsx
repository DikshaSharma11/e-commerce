import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="email">
        <input type="email" placeholder="Uour Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
