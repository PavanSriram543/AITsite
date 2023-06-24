import { Grid } from "@mui/joy";
import React, { useState, useEffect } from "react";
import CourseCard from "./courseCard/CourseCard";
import Course_DATA from "./CoursecardsData";
import "./trendingcard.scss";

function TrendingCards() {
  const [cards, setCards] = useState(Course_DATA);
  //   useEffect(() => {
  //     setCards(Course_DATA);
  //   }, []);
  console.log(cards);
  return (
    <div className="plr" container>
      <h3 className="pl-20 ">TRENDING COURSES</h3>
      <Grid container spacing={2}>
        {cards.map(({ id, ...CourseCardotherProps }) => (
          <CourseCard key={id} {...CourseCardotherProps} />
        ))}
      </Grid>
    </div>
  );
}

export default TrendingCards;
