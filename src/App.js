/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
    let [title, setTitle] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "파이썬 독학",
    ]);

    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React 블로그</h4>
            </div>
            {title.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4
                            onClick={() => {
                                setModal(!modal);
                            }}
                        >
                            {title[i]}
                            <span
                                onClick={() => {
                                    const copy = [...like];
                                    copy[i] = copy[i] + 1;
                                    setLike(copy);
                                }}
                            >
                                👍
                            </span>
                            {like[i]}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}

            {modal ? (
                <Modal title={title} setTitle={setTitle} color={"skyblue"} />
            ) : null}

            <button
                onClick={() => {
                    let copy = [...title];
                    copy.sort();
                    setTitle(copy);
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    let copy = [...title];
                    copy[0] = "여자코드추천";
                    setTitle(copy);
                }}
            >
                텍스트 변경
            </button>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{ background: props.color }}>
            <h4>{props.title[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    const copy = [...props.title];
                    copy[0] = "여자코트 추천";
                    props.setTitle(copy);
                }}
            >
                글수정
            </button>
        </div>
    );
}

export default App;
