import React, { Component } from 'react';
import { Wrapper, Button } from './styles/NavigationStyles';
import { Routing } from '../utils/routing';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

type Props = RouteComponentProps & {
  history: History;
};

export class Navigation extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.addNewDish = this.addNewDish.bind(this);
  }

  addNewDish() {
    const { history }: Props = this.props;

    history.push(Routing.addNewDish);
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.addNewDish}>add new</Button>
      </Wrapper>
    );
  }
}

export default withRouter(Navigation);
