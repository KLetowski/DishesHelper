import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { History } from 'history';
import { DishActionTypes } from '../types/DishTypes';
import { RouteComponentProps } from 'react-router';
import { IDish } from '../types/DishTypes';
import { ApplicationState } from '../reducer/rootReducer';
import { Content, ImgWrapper } from './styles/HomePageStyle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Routing } from '../utils/routing';
import Navigation from './Navigation';

type Props = RouteComponentProps & {
  history: History;
  dishes: IDish[];
  getDishes: Function;
  editDish: Function;
  deleteDish: Function;
};

type State = {};

class HomePage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.editDish = this.editDish.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
  }

  componentWillMount() {
    const { getDishes } = this.props;
    getDishes();
  }

  editDish(dish: IDish) {
    const { history, editDish }: Props = this.props;
    editDish(dish);
    history.push(Routing.editDish);
  }

  deleteDish(index: number, dishId: number) {
    this.props.deleteDish(index, dishId);
  }

  renderDish = () =>
    this.props.dishes.map((dish, index) => (
      <Content key={dish._id}>
        <EditIcon onClick={() => this.editDish(dish)} />
        <DeleteIcon onClick={() => this.deleteDish(index, dish._id)} />
        <ImgWrapper>
          <img src={dish.images} />
        </ImgWrapper>
        {dish.name}
      </Content>
    ));

  render() {
    return (
      <section>
        {this.renderDish()}
        <Navigation />
      </section>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    dishes: state.dish.dishes
  };
};

const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    getDishes: () => dispatch({ type: DishActionTypes.GET_DISHES, value: '' }),
    editDish: (dish: IDish) =>
      dispatch({ type: DishActionTypes.WATCH_EDIT_DISH, value: dish }),
    deleteDish: (index: number, dishId: number) =>
      dispatch({
        type: DishActionTypes.WATCH_DELETE_DISH,
        payload: { index: index, dishId: dishId }
      })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(HomePage)
);
