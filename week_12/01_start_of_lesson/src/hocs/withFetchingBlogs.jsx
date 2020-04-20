import React from 'react';

import database from '../services/firebase';

const withFetchingBlogs = (Component) => class WithFetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    database
      .ref('blogs')
      .once('value')
      .then((dataSnapshot) => {
        const blogEntries = [];

        dataSnapshot.forEach((childSnapshot) => {
          blogEntries.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        this.setState({
          data: blogEntries,
          isLoading: false,
        });
      })
      .catch((e) => {
        this.setState({
          error: e.message,
          isLoading: false,
        });

        console.log('Error fetching data', e.message);
      });
  }

  render() {
    return <Component {...this.props} {...this.state} />; // eslint-disable-line
  }
};

export default withFetchingBlogs;
