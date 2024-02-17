import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    CognitoUserPool: aws_cognito_identity_pool_id,
    ClientId:"775ap34sg5ch97k8nk1u65hh38",
}

export default CognitoUserPool(poolData);