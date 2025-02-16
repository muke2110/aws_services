🚀 AWS Cognito Authentication with Amplify UI

🌟 Overview

This project implements a secure authentication system using AWS Cognito for user login and registration. The system verifies users through AWS's email verification process, ensuring security and reliability. The frontend leverages AWS Amplify UI to provide a seamless user experience.

🛠️ Features

🔑 User Authentication: Sign-up, login, and logout functionality using AWS Cognito.

📧 Email Verification: Users receive a verification email before accessing the platform.

🔐 Secure Token Management: Authentication tokens are handled securely.

🎨 AWS Amplify UI: Pre-built UI components for easy integration.

⚡ Scalable & Serverless: Hosted on AWS with minimal infrastructure management.

🏗️ Project Structure

/aws_services
│── src/               # Contains the frontend source code
│── amplify/           # AWS Amplify configuration files
│── public/            # Public assets
│── .gitignore         # Git ignore rules
│── package.json       # Project metadata and dependencies
│── README.md          # Project documentation (You are here!)

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/muke2110/aws_services.git
cd aws_services

2️⃣ Install Dependencies

Ensure you have Node.js installed, then run:

npm install

3️⃣ Configure AWS Amplify

Initialize AWS Amplify in your project:

amplify init

Follow the prompts to set up your AWS environment. Then, add authentication:

amplify add auth
amplify push

4️⃣ Start the Development Server

Run the application:

npm start

The app will be available at http://localhost:3000/.

🧪 Running Tests

To run tests:

npm test

📦 Building for Production

To create an optimized build:

npm run build

🚀 Deployment

The project is configured for AWS Amplify deployment. Push your changes, and Amplify will handle the rest!

📚 Learn More

AWS Cognito Documentation

AWS Amplify Authentication

🤝 Contributing

Contributions are welcome! Fork the repository and submit a pull request. 🚀

📞 Contact

For questions or suggestions, reach out to Mukesh Nagineni at mukesh.nagineni@gmail.com.

