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
          <div className="grid grid-cols-2 mr-20">
            <div className="mr-16">
              <div className="grid grid-cols-2">
                <div>
                  <p className="mb-8 mt-1">First Name</p>
                  <p className="mb-8 mt-1">Last Name</p>
                  <p className="mb-8 mt-1">Email</p>
                  <p className="mb-8 mt-1">Currency</p>
                </div>
                <div>
                  <input className="mb-2" type="text" />
                  <input className="mb-2" type="text" />
                  <input className="mb-2" type="text" />
                  <div className="mb-1"></div>
                  <select className="w-[210px] h-[44px]" id="currency">
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mr-10">
            <div className="grid grid-cols-2">
                <div>
                  <p className="mb-8 mt-1">Password</p>
                  <p className="mb-8 mt-1">Confirm Password</p>
                </div>
                <div>
                  <input className="mb-2" type="password" />
                  <input className="mb-2" type="password" />
                </div>
              </div>
              <div>
                <h3 className="mb-4 mt-4">Password Requirements:</h3>
                <ul className="ml-16">
                  <li>Must be between 8-32 characters</li>
                  <li>Must contain atleast One Number {('( 1-9 )')}</li>
                  <li>Must contain atleast One Lowercase Letter {('( a-z )')}</li>
                  <li>Must contain atleast One Uppercase Letter {('( A-Z )')}</li>
                  <li>Must contain atleast One Special Character {('( ! @ # $ % ^ & * ( ) )')}</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
