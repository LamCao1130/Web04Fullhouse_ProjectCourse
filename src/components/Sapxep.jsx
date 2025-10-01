import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Sapxep({ newSuf, correct, explanation }) {
  let [checkResult, setCheckResult] = useState("");
  let [mangCop, setMangCop] = useState([...newSuf] || []);
  let [checkOut, SetCheckOut] = useState(<></>);
  let renderQues = mangCop?.map((item, index) => {
    return (
      <>
        <button
          style={{ padding: "10px", borderRadius: "10px", marginLeft: "5px" }}
          onClick={() => {
            setCheckResult(checkResult + " " + item);
            mangCop?.splice(index, 1);
          }}
        >
          {item}
        </button>
      </>
    );
  });
  let SumResult = () => {
    if (correct?.trim() === checkResult.trim()) {
      SetCheckOut("✅ Chính xác!");
    } else {
      SetCheckOut("❌ Sai rồi. Đáp án đúng: " + correct);
    }
  };
  return (
    <Card>
      <Card.Text>Sắp xếp lại câu {checkOut}</Card.Text>
      <Card.Body>
        {renderQues}
        <br />
        <br />
        <Button
          variant="primary"
          style={{ width: "100px" }}
          onClick={() => {
            setMangCop([...newSuf]);
            setCheckResult("");
          }}
        >
          Làm lại
        </Button>
        <Button variant="success" onClick={() => SumResult()}>
          Kiểm tra
        </Button>
      </Card.Body>
      {checkResult}
      <br />
      <p>💡 {explanation}</p>
    </Card>
  );
}
