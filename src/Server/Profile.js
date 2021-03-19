import fire, { db } from '../Firebase/auth';

export const logOut = () => {
  fire
    .auth()
    .signOut()
    .then(() => {
      window.location.reload(false);
    })
    .catch((error) => {
      // An error happened.
    });
};

export const uploadImage = (userData) => {
  fire
    .storage()
    .ref(`images/${userData.uid}/profileImage/`)
    .child(`${userData.firstName}.png`)
    .getDownloadURL()
    .then((url) => {
      return db
        .collection('users')
        .doc(userData.uid)
        .update({
          profilePicURL: url,
        })
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });
    }).catch = (e) => {
    console.log(e);
  };
};

// const changeName =  (newName) => {
//     db.
// }
