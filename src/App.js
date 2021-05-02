import {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './views/component/Navigation';
import CategoryInfo from './views/component/CategoryInfo';

function App() {
  const [category, setCategory] = useState(["국어", "영어", "수학", "개발"]);

  const mapToComponent = (data) => {
    return data.map((elem, idx) => {
      return (<CategoryInfo title={elem} key={idx}/>);
    });
  };

  return (
    <>
      <Navigation />
      <div className="container">
        {mapToComponent(category)}
      </div>
    </>
  );
}

export default App;