import React, { Component, FormEvent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { textField, textArea } from './MaterialFormControls';
import { Form, Wrapper, FieldControls, Wrap } from './styles/DishFormStyle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { compose } from 'redux';
import { IDish } from '../types/DishTypes';
import { ProductsList } from './ProductsList';

export interface IDishForm extends IDish {
  product: string;
}

type Props = {
  dish: IDish;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

type State = {
  newProduct: string;
  dish: IDish;
};

class DishForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      newProduct: '',
      dish: this.props.dish
    };

    this.handleNewProductChange = this.handleNewProductChange.bind(this);
  }

  handleNewProductChange(event: any) {
    const { value } = event.target;

    this.setState({
      newProduct: value
    });
  }

  addNewProduct = () => {
    const ingredients = this.state.dish.ingredients;
    ingredients.push(this.state.newProduct);
    this.setState(prevState => ({
      dish: {
        ...prevState.dish,
        ingredients: ingredients
      }
    }));
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Wrapper>
          <FieldControls>
            <Wrap>
              <Field
                component={textField}
                name="name"
                label="nazwa posiłku"
                defaultValue={this.state.dish.name}
                placeholder={this.state.dish.name || 'nazwa posiłku'}
              />
            </Wrap>
            <Wrap>
              <Field
                component={textArea}
                name="description"
                label="opis potrawy"
                defaultValue={this.state.dish.description}
                rows={2}
                maxRows={4}
              />
            </Wrap>
            <Wrap>
              <Field
                component={textArea}
                name="preparing"
                label="sposób przyrządzania"
                defaultValue={this.state.dish.preparing}
                rows={2}
                maxRows={4}
              />
            </Wrap>
          </FieldControls>
          <FieldControls>
            <Wrap>
              <Field
                component={textField}
                name="product"
                label="nowy produkt"
                value={this.state.newProduct}
                onChange={this.handleNewProductChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.addNewProduct}
              >
                <AddIcon />
              </Button>
            </Wrap>
            <ProductsList products={this.state.dish.ingredients} />
          </FieldControls>
        </Wrapper>
        <Button type="submit">zatwierdź</Button>
      </Form>
    );
  }
}

export default compose(
  reduxForm<any, any>({
    form: 'dishForm'
  })
)(DishForm);
