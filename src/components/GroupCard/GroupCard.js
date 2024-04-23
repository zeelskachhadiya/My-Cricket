import {  } from "./GroupCard.css";

const GroupCard = () => {
  const groups = [
    {
      image: "./image/warriors-group.png",
      name: "Warriors",
    },
    {
      image: "./image/strikers-group.png",
      name: "Strikers",
    },
    {
      image: "./image/blasters-group.png",
      name: "Blasters",
    },
  ];

  return (
    <div className="row justify-content-center">
      {groups.map((data) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-4 my-2">
            <div class="card group_card">
              <img src={data.image} className="" />
              <p>Join {data.name} Group</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupCard;
