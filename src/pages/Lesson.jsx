import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlApi } from "../counter/CourseSlice";
import { Button, Card, Table } from "react-bootstrap";
import { BsFillVolumeUpFill } from "react-icons/bs";
export default function Lesson() {
  let id = useParams().id;
  let [detail, setDetail] = useState({});
  useEffect(() => {
    async function callDetail(idDetail) {
      let info = await axios.get(urlApi + "/" + idDetail);
      setDetail(info.data);
    }
    callDetail(id);
  }, []);
  console.log(detail);
  let navigate = useNavigate();
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };
  let renderTable = detail.NewWord?.map((item) => {
    return (
      <tr>
        <td>{item.stt}</td>
        <td>{item.chu}</td>
        <td>{item.pronunciation}</td>
        <td>{item.nghia}</td>
        <td>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => speak(item.chu)}
          >
            <BsFillVolumeUpFill />
          </button>
        </td>
      </tr>
    );
  });
  let renderGrammar = detail.grammar;

  let renderDialogue = detail.dialogue?.map((item) => {
    return (
      <tr>
        <td>{item.speaker}</td>
        <td>{item.english}</td>
        <td>{item.pronunciation}</td>
        <td>{item.vietnamese}</td>
        <td>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => speak(item.english)}
          >
            <BsFillVolumeUpFill />
          </button>
        </td>
      </tr>
    );
  });
  let listenAll = "";
  let renderListenning = detail.listening?.map((item) => {
    listenAll += item.chu + " ";
    return (
      <li>
        <span style={{ color: "#1A73E8", fontWeight: "bold" }}>
          {item.chu}{" "}
        </span>
        <span> {item.pronunciation} - </span>
        <span>{item.nghia}</span>
      </li>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "#A8D9E4",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📘{detail.title}</h1>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <Card style={{ marginTop: "30px" }}>
          <Card.Title>📖 Từ vựng</Card.Title>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Từ vựng</th>
                  <th>Phiên âm</th>
                  <th>Nghĩa</th>
                  <th>Phát âm</th>
                </tr>
              </thead>
              <tbody>{renderTable}</tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "30px" }}>
          <Card.Title>💡 Ngữ pháp</Card.Title>
          <Card.Body
            dangerouslySetInnerHTML={{ __html: renderGrammar }}
          ></Card.Body>
        </Card>
        <Card style={{ marginTop: "30px" }}>
          <Card.Title>💬 Hội thoại</Card.Title>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Người nói</th>
                  <th>Câu tiếng Anh</th>
                  <th>Phiên âm</th>
                  <th>Dịch nghĩa</th>
                  <th>Phát âm</th>
                </tr>
              </thead>
              <tbody>{renderDialogue}</tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "30px" }}>
          <Card.Title>🎧 Nghe</Card.Title>
          <Card.Body>
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "10px 15px",
              }}
              onClick={() => speak(listenAll)}
            >
              <BsFillVolumeUpFill /> Nghe toàn bộ
            </button>
            <ul style={{ marginTop: "20px" }}>{renderListenning}</ul>
          </Card.Body>
        </Card>
        <div
          style={{
            margin: "30px 0 auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              navigate("/exercise/" + detail.id);
            }}
          >
            📝 Làm bài tập
          </Button>
        </div>
      </div>
    </div>
  );
}
