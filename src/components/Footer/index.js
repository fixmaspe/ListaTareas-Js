import React, {
  Component
} from "react";
import "./index.css";

export default class Footer extends Component {
  // state = {
  //   completedAll: false,
  // };

  handleChange = (event) => {
    this.props.checkAll(event.target.checked);
  };

  handleClick = () => {
    this.props.deleteCompleted();
  };

  render() {
    const {
      total,
      completed
    } = this.props;
    const completedAll = total === completed && total !== 0;

    return ( <
      div className = "todo-footer" >
      <
      label >
      <
      input type = "checkbox"
      checked = {
        completedAll
      }
      onChange = {
        this.handleChange
      }
      /> < /
      label > <
      span >
      <
      span > Completa: {
        completed
      } < /span> /
      Total: {
        total
      } <
      /span> <
      button className = "btn btn-danger"
      onClick = {
        this.handleClick
      } >
      Borre tarea completa <
      /button> < /
      div >
    );
  }
}