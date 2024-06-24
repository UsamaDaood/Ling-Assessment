import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setSearchUser,
  setUsers,
  setError,
  sortByName,
  showLowestRanked,
} from './store/actions';
import {RootState} from './store/reducers';
import leaderboardData from './data/leaderboard.json';

const App = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const {users, searchUser, error} = useSelector(
    (state: RootState) => state.leaderboard,
  );

  useEffect(() => {
    const usersArray = Object.values(leaderboardData);
    dispatch(setUsers(usersArray));
  }, [dispatch]);

  const handleSearch = () => {
    const userExists = Object.values(leaderboardData).some(
      user => user.name === username,
    );

    if (!userExists) {
      dispatch(
        setError(
          'This user name does not exist! Please specify an existing user name!',
        ),
      );
      return;
    }

    dispatch(setError(null));
    dispatch(setSearchUser(username));

    const sortedUsers = Object.values(leaderboardData).sort(
      (a, b) => b.bananas - a.bananas,
    );
    const topUsers = sortedUsers.slice(0, 10);

    const searchUserData = sortedUsers.find(user => user.name === username);

    if (
      searchUserData &&
      searchUserData.bananas < topUsers[topUsers.length - 1].bananas
    ) {
      topUsers.pop();
      topUsers.push(searchUserData);
      topUsers.sort((a, b) => b.bananas - a.bananas);
    }

    dispatch(setUsers(topUsers));
  };

  const handleSortByName = () => {
    dispatch(sortByName());
  };

  const handleShowLowestRanked = () => {
    dispatch(showLowestRanked());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
          />

          <Button title="Search" onPress={handleSearch} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sort by Name" onPress={handleSortByName} />
          <Button title="Show Lowest Ranked" onPress={handleShowLowestRanked} />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <FlatList
          data={users}
          keyExtractor={item => item.uid}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.userItem,
                item.name === searchUser ? styles.highlight : null,
              ]}>
              <Text>
                {index + 1}. {item.name} - {item.bananas} bananas
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlight: {
    backgroundColor: '#e0ffe0',
  },
});

export default App;
