import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    CognitoUserPool: "us-east-1_OJ8png17x",
    ClientId:"6gbbj6pj86369s7jkb2ud4gu63",
}

export default CognitoUserPool(poolData);