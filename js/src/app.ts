import { S3 } from 'aws-sdk';
import getNewsourceBlog from './getNewsourceBlog';
import getVault from './getVault';

export const lambdaHandler = async (): Promise<void> => {
	const vault = await getVault();
	const newsourceBlog = await getNewsourceBlog();
	const dataForS3 = { newsourceBlog, updated: new Date().toISOString(), vault };
	const s3 = new S3();
	const s3Params: S3.PutObjectRequest = {
		ACL: 'public-read',
		Body: JSON.stringify(dataForS3),
		Bucket: 'cnn-academy-resources',
		Key: 'externalData.json',
	};
	await s3.putObject(s3Params).promise();
};

lambdaHandler();
