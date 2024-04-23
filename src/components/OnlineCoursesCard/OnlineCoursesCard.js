import {} from "./OnlineCoursesCard.css";

const OnlineCoursesCard = () => {
  const Courses = [
    {
      image: "./image/Fundametal.png",
      name: "Fundamentals Courses",
    },
    {
      image: "./image/bowling.png",
      name: "Bowling Courses",
    },
    {
      image: "./image/batting.png",
      name: "Batting Courses",
    },
  ];

  return (
    <div className="row">
      {Courses.map((data) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-4 my-2">
            <div class="card courses_card">
              <img src={data.image} className="" />
              <p> {data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnlineCoursesCard;
