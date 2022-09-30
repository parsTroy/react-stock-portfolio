import React from "react";
import styles from './ProfilePage.module.css';

const Profile = () => {


  // Fizz Buzz Checks
  // for (let i = 0; i <= 100; i++) {
    
  //   let printed = '';

  //   if (i % 3 === 0)
  //     printed += 'Fizz';
  //   if (i % 5 === 0)
  //     printed += 'Buzz';
  //   if (i % 7 === 0)
  //     printed += 'Bazz';

  //   console.log(printed || i);
  // }


  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <h1 className={styles.title}>Profile</h1>
          <div className="grid grid-cols-2">
            <div className="mr-10">
              Left Side
              <div></div>
            </div>
            <div className="ml-10">
              Right Side
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
