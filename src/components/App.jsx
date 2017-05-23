import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { api, http } from '../api';
import Pager from './Pager';
import ItemList from './ItemList';
import Loader from './Loader';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };

    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
  }

  componentDidMount() {
    api.Items.getItems({
      page: this.state.page,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.page !== this.state.page) {
      http.abortRequest(api.Items.getItems);
      api.Items.getItems({
        page: nextState.page
      });
    }
  }

  handleNextPage() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }

  handlePrevPage() {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
  }

  render() {
    const { page } = this.state;
    const { isFetching, data, isSuccess, isError } = this.props;
    return (
      <div>
        {
          isFetching && <Loader />
        }
        {
          isSuccess && <ItemList items={data} />
        }
        {
          isError && <div>Error...</div>
        }
        <Pager onPrev={this.handlePrevPage} onNext={this.handleNextPage} currentPage={page.toString()} />
      </div>
    );
  }
}

App.propTypes = {
  isFetching: propTypes.bool.isRequired,
  data: propTypes.any,
  isSuccess: propTypes.bool.isRequired,
  isError: propTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { api: { Items: { getItems } } } = state;
  const { isFetching, data, isSuccess, isError } = getItems;
  return { isFetching, data, isSuccess, isError };
};

export default connect(mapStateToProps)(App);
