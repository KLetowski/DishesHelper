import React, { Component } from 'react';
import DishForm, { IDishForm } from './DishForm';
import { connect } from 'react-redux';
import { Container } from './styles/NewDishStyle';
import axios, { AxiosResponse } from 'axios';
import { addNewDish, url } from '../utils/apiUrl';
import { IDish } from '../types/DishTypes';
import { Response } from '../utils/axios';

type Props = {
  dish: IDish;
};

type State = {
  dish: IDish;
};

class NewDish extends Component<State, Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dish: {
        _id: -1,
        description: '',
        images: '',
        ingredients: [],
        name: '',
        preparing: ''
      }
    };
    this.submit = this.submit.bind(this);
  }

  submit(values: IDishForm) {
    values.ingredients = this.state.dish.ingredients;
    delete values.product;

    axios({
      method: 'post',
      responseType: 'json',
      url: url(addNewDish),
      data: values
    })
      .then((response: Response<string>) => {
        if (response.status === 201) alert('dodano nowy posiłek');
      })
      .catch((error: Response<string>) => {
        alert('nie dodano nowego posiłku');
      });
  }

  render() {
    return (
      <Container>
        <DishForm onSubmit={this.submit} dish={this.state.dish} />
      </Container>
    );
  }
}

export default connect(
  null,
  {}
)(NewDish);
