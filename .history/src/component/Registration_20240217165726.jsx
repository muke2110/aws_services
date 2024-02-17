import React, { useState } from 'react';
import { signUp } from 'aws-amplify/auth'; // Import Auth from AWS Amplify

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signUp({
//         username: formData.username,
//         password: formData.password,
//         attributes: {
//           email: formData.email
//         }
//       });
//       console.log('Registration successful');
//       // Optionally, you can redirect to another page or show a success message
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle registration error, show error message to the user, etc.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </label>
//       <label>
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AsignUp({
        username: formData.username,
        password: formData.password,
        attributes: {
          email: formData.email
        }
      });
      console.log('Registration successful');
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error, show error message to the user, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
