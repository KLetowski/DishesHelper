import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  products: string[];
};

export class ProductsList extends Component<any, Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: this.props.products
    };

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(index: number) {
    this.state.products.splice(index, 1);
    const newProductsList = this.state.products;

    this.setState({
      products: newProductsList
    });
  }

  render() {
    return (
      <List>
        Lista produktów
        {this.state.products.map((value, index) => (
          <ListItem key={value} role={undefined} dense button>
            <ListItemText primary={value} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => this.deleteProduct(index)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}
