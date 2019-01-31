import React, { Component } from 'react';
import DishForm, { IDishForm } from './DishForm';
import { connect } from 'react-redux';
import { IDish } from '../types/DishTypes';
import { ApplicationState } from '../reducer/rootReducer';

type Props = {
  editDish: IDish;
};

export class EditDish extends Component<any, Props> {
  constructor(props: any) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values: IDishForm) {
    console.log(values);
    console.log(this.props.editDish);
  }

  render() {
    return (
      <div>
        <DishForm onSubmit={this.submit} dish={this.props.editDish} />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    editDish: state.dish.selectedDish
  };
};

export default connect(
  mapStateToProps,
  {}
)(EditDish);
