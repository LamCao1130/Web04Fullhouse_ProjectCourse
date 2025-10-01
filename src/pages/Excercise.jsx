import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlApi } from "../counter/CourseSlice";
import { Button, Card, InputGroup } from "react-bootstrap";
import { BsFillVolumeUpFill } from "react-icons/bs";
import ExerciseListen from "../components/ExerciseListen";
import Sapxep from "../components/Sapxep";

export default function Excercise() {
  const [dataEx, setDataEx] = useState({});
  let id = useParams().id;
  useEffect(() => {
    async function callApiData(idData) {
      let dataCop = await axios.get(urlApi + "?id=" + idData);
      setDataEx(dataCop.data[0]);
    }
    callApiData(id);
  }, []);

  console.log(dataEx);
  let renderListen = dataEx?.dialogue?.map((item, index) => {
    let newString = item.english?.split(" ");
    let randomWords = Math.floor(Math.random() * newString?.length);
    let stringRen = "";
    newString.forEach((element, index) => {
      if (index === randomWords) {
        stringRen += "___";
      } else {
        stringRen += element + " ";
      }
    });
    return (
      <>
        <ExerciseListen
          key={index}
          item={item}
          stringRen={stringRen}
          result={newString[randomWords]}
        />
      </>
    );
  });
  let renderSuffle = dataEx?.sapxepcau?.map((item) => {
    let newSuf = item.correct?.split(" ");
    for (let i in newSuf) {
      let j = Math.floor(Math.random() * newSuf.length);
      let sw = newSuf[i];
      newSuf[i] = newSuf[j];
      newSuf[j] = sw;
    }
    return (
      <Sapxep
        newSuf={newSuf}
        correct={item.correct}
        explanation={item.explanation}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h3>📝 Bài tập – {dataEx?.title}</h3>
      <div className="ex1">
        <h5>🎧 Bài 1: Nghe và điền từ</h5>
        <hr style={{ color: "#2980B9", border: "1px solid #2980B9" }} />
        {renderListen}
      </div>
      <div className="ex2" style={{ marginTop: "50px" }}>
        <h5>✂️ Bài 2: Sắp xếp câu</h5>
        <hr style={{ color: "#2980B9", border: "1px solid #2980B9" }} />
        {renderSuffle}
      </div>
    </div>
  );
}
