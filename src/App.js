import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    id: '1',
    image: 'http://placeimg.com/64/64/1',
    name: '김진호',
    birthday: '970207',
    gender: '남자',
    job: '대학생',
  },
  {
    id: '2',
    image: 'http://placeimg.com/64/64/2',
    name: '홍길동',
    birthday: '970305',
    gender: '남자',
    job: '프로그래머',
  },
  {
    id: '3',
    image: 'http://placeimg.com/64/64/3',
    name: '이순신',
    birthday: '9401204',
    gender: '남자',
    job: '프리랜서',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {
          // map함수를 사용하여 더 간단히 표현 가능
          customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })

          /* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */
        }
      </div>
    );
  }
}

export default App;
