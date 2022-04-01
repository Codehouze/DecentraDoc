import { Web3Storage } from 'web3.storage';  // use either Web3.torage or NFT.torage
import { create } from 'ipfs-http-client';
import axios from 'axios';
import { storageApiToken } from '../../config';

const web3Client = new Web3Storage({ token: storageApiToken });
const ipfsHttpClient = create('https://ipfs.infura.io:5001/api/v0');

export const uploadMediaFile = async (file, tag) => {
  const rootCid = await web3Client.put([file], {
    name: tag,
    maxRetries: 3,
  });

  return `https://dweb.link/ipfs/${rootCid}/${file.name}`; // complete url
};

export const saveMetadata = async (metadata) => {
  const stringified = JSON.stringify(metadata);

  const added = await ipfsHttpClient.add(stringified, {
    progress: (prog) => console.log(`progress: ${prog}`), // eslint-disable-line no-console
  });

  return `https://ipfs.infura.io/ipfs/${added.path}`;
};

export const getMetadata = async (uri) => {
  const res = await axios.get(uri);

  return res.data;
};
