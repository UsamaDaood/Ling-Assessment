# Case Study Leaderboard

This project is a React Native application that displays a leaderboard of users based on the number of bananas they have. Users can search for specific usernames, sort the list by rank or name, and see the top 10 users with the highest number of bananas.

## Demo Videos.

- Android Demo: https://drive.google.com/file/d/1lI7yUMzlyfiwiZJEXi4LG0WABGnKf3Rv/view?usp=sharing
- IOS Demo: https://drive.google.com/file/d/1bxI1AVjVDjIVSrLJSKxuSA35nj1KXRvL/view?usp=sharing

## Features

- Search for a specific username
- Display a list of the top 10 users with the most bananas
- Highlight the searched user in the list
- Sort the list by rank or name
- Show the lowest ranked users, listed alphabetically when scores are the same
- Handle cases where the searched user does not exist with an error message

## Tech Stack

- React Native
- Redux (without Redux Toolkit)
- TypeScript for type checking
- Styled Components for styling

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd case-study-leaderboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

## Running on Device/Simulator

To run the application on a specific platform, use the following commands:

- **iOS:**

  ```bash
  npx react-native run-ios
  ```

- **Android:**
  ```bash
  npx react-native run-android
  ```

## File Structure

- `src/`
- `store/actions/`: Contains Redux action creators
- `store/reducers/`: Redux reducers to handle state changes
- `store/`: Redux store configuration

## Usage

1. **Search User:**

   - Enter a username in the text input and click the "Search" button.
   - The list will update to show the top 10 users with the highest number of bananas, highlighting the searched user if found.

2. **Sort List:**

   - Click the "Sort by name/rank" button to toggle sorting between rank and name.
   - The list will update to reflect the selected sorting order.

3. **Error Handling:**
   - If the searched username does not exist, an alert message will be shown: "This user name does not exist! Please specify an existing user name!"

## Unit Tests

Unit tests are written using Jest. To run the tests, use the following command:

```bash
npm test
```
