const xray = require('aws-xray-sdk-core');
const {SNSClient} = require("@aws-sdk/client-sns");

let snsClient = null;

exports.getSnsClient = async () => {
    if (snsClient) return snsClient;
    snsClient = xray.captureAWSv3Client(new SNSClient({}))
    return snsClient;
};
