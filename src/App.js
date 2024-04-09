/* eslint-disable */

import './App.css';
import { useState } from 'react';

function List(props) {
    return (
        <div className='list'>
            <h4 onClick={() => {
                if (props.모달 == 0) {
                    props.모달제목변경(props.글제목[props.index]);
                    props.모달변경(1);
                }
                else {
                    props.모달변경(0);
                }
            }}> {props.글제목[props.index]}

                <span onClick={() => {
                    let copy따봉 = [...props.따봉];
                    copy따봉[props.index] += 1;
                    props.따봉변경(copy따봉);
                }}>👍</span> {props.따봉[props.index]}

                <span onClick={() => {
                    let copy싫어요 = [...props.싫어요];
                    copy싫어요[props.index] += 1;
                    props.싫어요변경(copy싫어요);
                }}>👎</span> {props.싫어요[props.index]}
            </h4>
            <p>2월 17일 발행</p>
            <button type="button" className="title-del">삭제</button>
        </div>
    );
}

function Modal(props) {
    return (
        <div className='modal'>
            <h4>{props.모달제목}</h4>
            <p>날짜</p>
            <p>상세 내용</p>
        </div>
    );
}


function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학', '과제 싫어', '시험은 더 싫어', '공부하기 싫어']); // 앞에 꺼가 변수 이름
    let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0, 0]);
    let [싫어요, 싫어요변경] = useState([0, 0, 0, 0, 0, 0]);
    let [모달, 모달변경] = useState(0);
    let [모달제목, 모달제목변경] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            <div className='container'>
                <div className='leftcontainer'>
                    {
                        글제목.map(function (element, count) {

                            return (
                                <List index={count} 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉변경={따봉변경} 싫어요={싫어요} 싫어요변경={싫어요변경} 모달={모달} 모달변경={모달변경} 모달제목={모달제목} 모달제목변경={모달제목변경}></List>
                            )
                        })
                    }

                    {
                        모달 == 1 ? <Modal 모달제목={모달제목} /> : null
                    }
                </div>


                <div className='rightcontainer'>
                    <input className="title-input"></input>
                    <button type="button" className="title-inputbutton">저장</button>
                </div>
            </div>
        </div>
    );
}

export default App;

// 컴포넌트 언제 쓰면 좋은가
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

/* 
      <button onClick={ () => {

        let copy = [...글제목]; // 원리 : 변수가 아닌 화살표 방향만 저장 및 복사, [...??] : 새로운 화살표 저장 의미
        copy[0] = '여자 코트 추천';
        글제목변경( copy );
      }}>글수정</button> */
