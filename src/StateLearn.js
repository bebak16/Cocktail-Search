import React, { Component } from 'react'

class StateLearn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                name: 'Vivek',
                lastName: 'Kumar',
                age: 24
            },
            employee: {
                empname: 'Viswas',
                empage: 36
            }
        }
    }

 ageHandler = () => {
     this.setState({
          person: {
            ...this.state.person,
              age : 26
          },
          employee : {
              ...this.state.employee,
              empage : 46
          }
     })
  }

  nameHandler = () => {
      this.setState((prevState) => ({
        
          person : { ...prevState.person,  name : 'Bob'}
      }))
  }

    render() {
        const {name, lastName, age} = this.state.person;
        const {empname, empage} = this.state.employee;
        return (
            <div>
               <h3>My name is {name} {lastName} and my age is {age}</h3>
               <h3>Employee name is {empname} and his age is {empage}</h3>
               {/* //Way one */}
               <button onClick = {this.ageHandler}>Change Age</button>
               {/* Way Two */}
               <button onClick={this.nameHandler}>Change Names</button>
            </div>
        )
    }
}

export default StateLearn;
