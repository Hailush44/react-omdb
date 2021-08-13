import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messageStyle = {
  color: 'blue',
  backgroundColor: 'lightgrey'
}

const timeStyle = {
  backgroundColor: 'lightcoral'
}

const Message = (props) => <p style={messageStyle}>Hello, {props.name}</p>

const Time = (props) => <p style={timeStyle}>{props.hours} : {props.minutes} : {props.seconds}</p>

const Greeting = (props) => {
  const time = props.time.split(':')

  return (
    <div className='limegreen'>
      <Message name={props.name} />
      <Time hours={time[0]} minutes={time[1]} seconds={time[2]} />
      {props.children}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Greeting name='Elias' time='8:30:36'>
      <p>some extra stuff goes here</p>
    </Greeting>

    <Greeting name='Aramayis' time='8:30:36'>
      <strong>Hey</strong>
      <em>This is italic</em>
    </Greeting>

    <Greeting name='Steven' time='8:30:36' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
