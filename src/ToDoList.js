import React, {Component} from 'react';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    updateInput(key, value) {
        this.setState({
                          [key]: value
                      });
    }

    addItem() {

        let newItem = {
            id: 1 + Math.random(),
            value: this.state.item.slice()
        };

        let newList = [...this.state.list];
        newList.push(newItem);

        this.setState({
                          list: newList,
                          item: ""
                      });
    }

    deleteItem(id) {
        let list = [...this.state.list];

        let updatedList = list.filter(item => item.id !== id);

        this.setState({
                          list: updatedList
                      })

    }

    render() {
        return (
            <div>
                <h1>My List</h1>
                <label>What is next? </label>
                <br/>
                <input
                    type="text"
                    placeholder="Type an item here..."
                    value={this.state.item}
                    onChange={e => this.updateInput("item", e.target.value)}/>


                <button onClick={() => this.addItem()}> Add
                < /button>

                <ul>
                    {this.state.list.map(item => {
                                             return (
                                                 <li key={item.id}>
                                                     {item.value}
                                                     <button onClick={() => this.deleteItem(item.id)}>x</button>
                                                 </li>
                                             )
                                         }
                    )
                    }

                </ul>

            </div>
        );
    }

}

export default ToDoList;
