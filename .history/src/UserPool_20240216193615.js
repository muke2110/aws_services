import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    Cog: "us-east-1_OJ8png17x",
    ClientId:"775ap34sg5ch97k8nk1u65hh38",
}

export default CognitoUserPool(poolData);