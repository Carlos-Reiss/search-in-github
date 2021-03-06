import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const Header = styled.View`
  align-items: center;
  padding-bottom: 15px;
  margin-top: 5px;
  border-bottom-width: 1px;
  border-color: #666;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #999;
`;

export const Name = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 20px;
`;

export const Starred = styled(RectButton)`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #999;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
