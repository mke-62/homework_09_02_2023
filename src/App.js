import { useState } from "react";
import spartak from './img/spartak.png';
import zenit from './img/zenit.png';



import './App.css';

function App() {



  const teams = [
    {
      name: 'Зенит',
      city: 'Санкт-Петербург',
      date: '25 мая 1925',
      logo: zenit,
      kyb:['Кубок СССР 1944',
        'Четырёхкратный обладатель Кубка России',
        'Кубок сезона 1985',
        'Семикратный обладатель Суперкубка России',
        'Кубок Премьер-лиги 2003', 'Кубок УЕФА 2007/08',
        'Суперкубок УЕФА 2008'],
      gols:'Сезон 2022/23 - 80 голов',
      team:[
        'Семак Георгий',
        'Королев Давид',
        'Бязров Даниил ',
        'Одоевский Иван',
        'Михаил Кержаков ',
        'Михаил Кизеев',
        'Арсен Адамов',
        'Владислав Масальский',
        'Вячеслав Караваев',
        'Данил Круговой',
        ],
    },
    {
      name: 'Спартак-Москва',
      city: 'Москва',
      date: '1922',
      logo: spartak,
      kyb:['10-кратный обладатель Кубка СССР',
        '4-кратный обладатель Кубка России',
        'обладатель Суперкубка России',
        '6-кратный обладатель Кубка Содружества'],
      gols:'Сезон 2022/23 - 39 голов',
      team:[' Александр Алексеев ',
        ' Александр Максименко ',
        'Александр Селихов ',
        ' Антон Шитов',
        ' Даниил Марков',
        ' Михаил Волков',
        ' Алексис Дуарте',
        ' Георгий Джикия',
        ' Дамир Шайхтдинов',
        ' Дмитрий Иванников'],
    },
  ];
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const arr = ["да", "нет", "наверное", "незнаю"];

  const [answear, setAnswear] = useState("Нажми на меня");
  const [pending, setPending] = useState(false);
  function getRandomIndex(len) {
    return Math.floor(Math.random() * len);
  }

  function changeText() {
    setAnswear("подождите");
    if (pending) {
      return;
    } else {
      const index = getRandomIndex(arr.length);
      setPending(true);
      setTimeout(() => {
        console.log("timeout");
        setAnswear(arr[index]);
        setPending(false);
      }, 1000);
    }
  }

  return (
      <div className="App">
        <div className="zd"><h3>Задание 1 - 3</h3>

          {teams.map((team)=>(
              <div   style={{ backgroundColor: "#" + `${randomColor}` }}>
              <ol>
                <li><b>Название клуба:</b> <ins> {team.name}</ins></li>
                <li><b>Город:</b> <ins>{team.city}</ins></li>
                <li><b>Дата основания:</b> <ins>{team.date}</ins></li>
                <li><b>Логотип:</b> <img className="card" src={team.logo} alt="logo" /></li>
                <li><b>Кубки:</b> <ol>{team.kyb.map((kb)=>(

                      <li><ins>{kb}</ins></li>

                ))}</ol></li>
                <li><b>Голы:</b> <ins>{team.gols}</ins></li>
                <li><b>Учасники:</b> <ol>{team.team.map((tm)=>(

                      <li><ins>{tm}</ins></li>

                ))}</ol></li>
              </ol>
              </div>
            ))}
        </div>
        <div className="zd"><h3>Задание 4</h3>

          <div className="out">
            <div className="in" onClick={changeText}>
              {answear}
            </div>
          </div>
        </div>

      </div>

  );
}



export default App;
