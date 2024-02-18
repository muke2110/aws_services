import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    CognitoUserPool: "us-east-1:c9767613-ee21-4fd0-98c2-da941b228dfb",
    ClientId:"7e5p6huaa16sbocoadk4vbak46",
}

export default CognitoUserPool(poolData);



//Real
export const COGNITO = {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wL2lMS13E",
    APP_CLIENT_ID: "51lfung0g80cnqk39v52vfdlrf"
}