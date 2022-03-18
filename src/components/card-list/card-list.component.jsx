import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
//the argument would be this.props.monsters (destructuring)
  return (
    <div className="card-list">
      {
        monsters.map((monster, i) => {
          return (
            <Card monster={monster} key={i} />
          )
        })
      }
    </div>
  );
}

// class CardList extends Component {
//   render() {
//
//     console.log("render from cardlist");
//
//     const { monsters } = this.props;
//
//     return (
//       <div className="card-list">
//         {
//           monsters.map((monster, i) => {
//             return (
//               <Card monster={monster} key={i} />
//             )
//           })
//         }
//       </div>
//     );
//   }
// }

export default CardList;
