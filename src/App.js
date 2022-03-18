import { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');// [value to store, setter value]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  //filter through these monsters whenever monsters or searchField changes


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBox className="monster-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {monsters: users}
//         },
//         () => {
//           console.log(this.state);
//         }
//       ));
//   }
//
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//     /*optimization - not unnecessarily rendering extra anonymous functions whenever
//     the render calls*/
//   }
//
//   render() {
//
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     /*optimizations - readable */
//
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//       /*includes method is case sensitive*/
//       /*filter is creating a new array of the filtered monsters from search input - immutable*/
//     });
//
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters</h1>
//         <SearchBox className="monster-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//
//   }
// }

export default App;
