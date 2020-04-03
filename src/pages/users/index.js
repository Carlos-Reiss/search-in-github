import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export default class User extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape().isRequired,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
  };

  async componentDidMount() {
    const { route } = this.props;

    const { user } = route.params;

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    const { route } = this.props;
    const { page, loading, stars } = this.state;
    const { user } = route.params;

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);
    this.setState({
      page: page + 1,
      loading: false,
      stars: [...stars, ...response.data],
    });
  };

  render() {
    const { route } = this.props;
    const { stars, loading } = this.state;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Loading loading={loading}>
            <ActivityIndicator color="#999" size={80} />
          </Loading>
        ) : (
          <Stars
            data={stars}
            keyExtractor={(star) => String(star.id)}
            onEndReachedThereshold={0.1}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
