import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourse } from "./counter/CourseSlice";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles/all.css";

function App() {
  let disp = useDispatch();
  let navigate = useNavigate();
  let courses = useSelector((state) => {
    return state.courses.coursesList;
  });
  useEffect(() => {
    disp(fetchAllCourse());
  }, []);
  let listCourses = courses.map((item) => {
    return (
      <>
        <Card style={{ width: "18rem" }} className="home__detail">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Button
              onClick={() => {
                navigate("/lesson/" + item.id);
              }}
            >
              Ôn tập
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <div className="home">
        <h1>📘 English Lessons</h1>
        <p>Chọn bài học để bắt đầu luyện tập</p>
        <div className="home__content">{listCourses}</div>
      </div>
    </>
  );
}

export default App;
