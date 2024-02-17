import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    CognitoUserPool: "us-east-1_dJs01uqxW",
    ClientId:"you",
}

export default CognitoUserPool(poolData);