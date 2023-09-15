# React Native Book Library App

This is a simple Book Library mobile application built using React Native. The app allows users to browse a list of books, search for books by name, view book details, and manage their library. It also includes user authentication with login and registration screens.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Expo CLI installed globally (`npm install -g expo-cli`).
- A code editor of your choice (e.g., Visual Studio Code).
- A mobile device or emulator for testing the app.



---

## Screenshot of UI
<div align="center">
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/3298c7d5-0456-42b5-9181-51a73a144e3a" width="220" height="400" />
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/c485f2a9-2a99-40a2-99f8-627fc9dfb46e" width="220" height="400" />
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/f3e0ed85-fc99-499e-bc50-8d9f00d9465f" width="220" height="400" />
</div>
<div align="center">
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/79da04cb-a278-4755-9db4-0c34e8d4c760" width="220" height="400" />
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/4f5e10b8-cc1a-49c4-8fd1-49377cac9ce4" width="220" height="400" />
<img src="https://github.com/rihamnazeer/Book-Library/assets/90144970/1ca07cf2-8773-4689-8617-5b0f887770f6" width="220" height="400" />
</div>

---
## Installation

### 1. Create a Project in Expo 

    expo init BookLibrary
    cd BookLibrary


### 2. Install these dependencies inside the folder
in cmd>>>

    npm install @react-navigation/native
    npm install @react-navigation/stack
    expo install react-native-gesture-handler
    npm install @react-navigation/bottom-tabs
    npm install @react-navigation/drawer
    expo install react-native-gesture-handler react-native-reanimated
    expo install react-native-reanimated
    npm install react-native-elements --save --force
    npm install react-native-vector-icons --save
    
    
### 3. Replace all files files inside your Folder


### 4. Run app with this command
    expo start --clear


---

## App Structure

The app is organized into the following sections:

1. **Authentication**: User registration and login screens.

2. **Home**: Displays a list of book categories and allows users to select a category to view books.

3. **Books**: Lists books in the selected category, and users can click on a book to view its details.

4. **Book Details**: Shows detailed information about a selected book, including title, author, description, cover photo, and price.

5. **Search**: Allows users to search for books by name.

---

## Technologies Used

- **React Native**: A JavaScript framework for building native mobile applications.

- **Expo**: A platform for building and deploying React Native apps.

- **React Navigation**: Used for navigation between screens.
