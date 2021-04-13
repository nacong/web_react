/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, titleChange] = useState(['React 사용 방법', 'php 배우기', '웹해킹 어려운 이유']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, modalChange] = useState(true);
  let [selectNumber, selectNumberChange] = useState(0);
  
  let [inputValue, inputValueChange] = useState('');

  return (
    <div className="App">
      <nav className="black-nav">개발 Blog</nav>
      {
        title.map(function(i,j) {
          return(
            <div className="list" key={j}>
              <h3 onClick={ ()=> { selectNumberChange(j) } }> { i } <span onClick={ ()=> {
                var likeCopy = [...like];
                likeCopy[j]++;
                likeChange(likeCopy);
              } }>👍 { like[j] }</span> </h3>
              <p> 4월 12일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ inputValueChange(e.target.value) } } />
        <button onClick={ ()=>{
          var arrayCopy = [...title];
          arrayCopy.push(inputValue);
          like.push(0);
          titleChange(arrayCopy);
        } }>저장</button>
      </div>

      <button onClick={ ()=>{ modalChange(!modal) } }>열고닫기</button>

      {
        modal === true // 위에 주석 : 이벤트 동작한 곳.value | value: input에 들어간 값
        ? <Modal title={ title } selectNumber={ selectNumber }></Modal>
        : null
      }

      
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h2> {props.title[props.selectNumber]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;