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
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
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

    if (loading) {
      return;
    }

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      page: page + 1,
      loading: false,
      stars: page >= 2 ? [...stars, ...response.data] : [...response.data],
    });
  };

  refreshlist = async () => {
    const { route } = this.props;
    const { user } = route.params;

    this.setState({ refreshing: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false, refreshing: false });
  };

  Repo = (starred) => {
    const { navigation } = this.props;
    navigation.navigate('Repositories', { starred });
  };

  render() {
    const { route } = this.props;
    const { stars, loading, refreshing } = this.state;
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
            onEndReachedThereshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshlist}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <Starred onPress={() => this.Repo(item)}>
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
