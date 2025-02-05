import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIAVIOZF7JFOZASBTOJ",
  secretAccessKey: "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",
  region: "Europe (Stockholm) eu-north-1",
});

export const s3 = new AWS.S3();