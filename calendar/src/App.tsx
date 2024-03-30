import dayjs from 'dayjs';
import Calendar from './Calendar/index';

function App() {
  return (<div className="App">
    <Calendar value={dayjs('2024-3-30')} locale='en-US' dateInnerContent={(value)=>{
      return <div>
        <p >{value.format('YYYY/MM/DD')}</p>
      </div>
    }}></Calendar>
  </div>)
}
export default App