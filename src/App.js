import React, { useState, useEffect } from 'react';
import ChatArea from './components/ChatArea';
import Login from './components/LoginScreen/LoginScreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import fire from './Firebase/auth';
import { db } from './Firebase/auth';
import SignIn from './components/LoginScreen/LoginScreen';

function App() {
  const [currentUser, setCurrentUser] = useState();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        db.collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            setUserInfo(doc.data());
          });
      }
    });
  }, []);

  const handleSignIn = (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setCurrentUser(userCredential);
        // ...
      })
      .catch((error) => {
        notify(error.message);
      });
  };
  const notify = (message) =>
    toast.error(message, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const handleSignUp = (email, password, firstName, lastName) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        db.collection('users')
          .doc(user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            uid: user.uid,
            userName: firstName,
          })
          .then(() => {
            console.log('Document successfully written!');
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <Router>
      <div>
        {currentUser ? (
          <Redirect exact to="/" />
        ) : (
          <Redirect exact to="/SignIn" />
        )}
        <Route
          exact
          path="/"
          component={() => <ChatArea userData={userInfo} />}
        />
        <Route
          exact
          path="/SignIn"
          component={() => (
            <SignIn
              handleSignIn={handleSignIn}
              currentUser={currentUser}
              handleSignUp={handleSignUp}
            />
          )}
        />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </Router>
  );
}

export default App;
