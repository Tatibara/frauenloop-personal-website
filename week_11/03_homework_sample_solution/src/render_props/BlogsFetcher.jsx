import React from 'react';

import database from '../services/firebase';

class BlogsFetcher extends React.Component {
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
    const { children } = this.props;
    return children(this.state);
  }
}

export default BlogsFetcher;
