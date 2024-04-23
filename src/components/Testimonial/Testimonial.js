import {} from "./Testimonial.css";

const Testimonial = () => {
  const feedback = [
    {
      image: "./image/testimonial.png",
      name: "James Pattinson",
      describe:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”",
    },
    {
      image: "./image/testimonial.png",
      name: "James Pattinson",
      describe:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”",
    },
    {
      image: "./image/testimonial.png",
      name: "James Pattinson",
      describe:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”",
    },
  ];
  return (
    <div className="row justify-content-center">
      {feedback.map((data)=> {
       return(
        <div className="col-12 col-sm-6 col-lg-4 col-xl-4 my-2">
        <div className="main-testimonial text-center">
            <img className="image"src={data.image}/>
            <div className="testimonial-details">
                <div className="name">{data.name}</div>
                <div className="describ">{data.describe}</div>
            </div>
        </div>
    </div>
       );
      })}
    </div>
  );
};

export default Testimonial;
