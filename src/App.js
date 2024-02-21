/* eslint-disable */ 

import './reset.css';
import './App.css';
import { useState } from 'react';

function App() {

// let post = '김포 맛집';
let address = ['풍무로 19번길 23 삼성프라자 3층', '풍무로 10번길 4층', '유현로 3길 5층'];

// state는 자동 렌더링 됨
// 자주 변경될 것 같은 내용은 state로 하는 게 좋음
let [post, i] =useState(['미스터 피자', '엄마손 김치찌게', '맥도날드']);
let [good, goodPlus] = useState(0);
let [like, liked] = useState('♡');

  return (
    <div className="App">
      <div className="black-nav">
        <div className="container">
          <h1><a href='javscript:;' style={{fontSize : '16px', fontWeight : 'bold' , color : '#fff'}}>Blog</a></h1>
        </div>
      </div>
      {/* 리스트 목록 */}
      <div className="list-area">
        <div className="container">
          <h3 className="title">리스트</h3>
          <div className="list">
            <div className="list_top">
              <h4>{ post[0] }</h4>
              <div className="list_top_ico">
                <button type="button" onClick={ ()=>{liked('♥')} }>{ like }</button>
                <button type="button" onClick={ ()=>{goodPlus(good + 1)} }>👍<span>{ good }</span></button>
              </div>
            </div>
            <p>{ address[0] }</p>
          </div>
          <div className="list">
            <h4>{ post[1] }</h4>
            <p>{ address[1] }</p>
          </div>
          <div className="list">
            <h4>{ post[2] }</h4>
            <p>{ address[2] }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
