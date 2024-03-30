import dayjs from 'dayjs';
import Calendar from './Calendar/index';

function App() {
  return (<div className="App">
    <Calendar value={dayjs('2024-3-29')}></Calendar>
  </div>)
}
export default App