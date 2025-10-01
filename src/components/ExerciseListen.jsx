import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlApi } from "../counter/CourseSlice";
import { Button, Card, InputGroup } from "react-bootstrap";
import { BsFillVolumeUpFill } from "react-icons/bs";

export default function ExerciseListen({ item, stringRen, result }) {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState(<></>);
  let CheckWord = (word) => {
    if (word === result) {
      setCheckOut(<p>✅ Chính xác!</p>);
    } else {
      setCheckOut(<p>❌ Sai rồi. Đáp án đúng: {result}</p>);
    }
  };
  return (
    <>
      <Card>
        <Card.Text>{stringRen}</Card.Text>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button style={{ width: "90px" }} onClick={() => speak(item.english)}>
            <BsFillVolumeUpFill /> Nghe
          </Button>
          <input
            type="text"
            placeholder="Điền đáp án"
            style={{ padding: "5px", borderRadius: "10px", width: "280px" }}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <Button
            variant="success"
            style={{ width: "90px" }}
            onClick={() => CheckWord(checkIn)}
          >
            Kiểm tra
          </Button>
          {checkOut}
        </div>
      </Card>
    </>
  );
}
