import { Grid } from "@mui/joy";
import React, { useState } from "react";
import CourseCard from "../trendingcards/courseCard/CourseCard";
import "./recentAdition.scss";
import Course_DATA from "./state";

function RecentAdition() {
  const [cards, setCards] = useState(Course_DATA);

  return (
    <div className="col-md-12 plr mt-4">
      <h3 className="pl-20">RECENT ADDITIONS</h3>
      <Grid container spacing={2}>
        {cards.map(({ id, ...CourseCardotherProps }) => (
          <CourseCard key={id} {...CourseCardotherProps} />
        ))}
      </Grid>
    </div>
  );
}

export default RecentAdition;
