import axios from 'axios';

const api = axios.create({
  baseURL: 'https://strayhome-server.onrender.com'
});

export default api;

interface UserParams {
  name: string;
  email: string;
  password: string;
  birthdate: string;
  phone: string;
}

interface CreateAnimalParams {
  name: string;
  species: string;
  image: string;
  bio: string;
  gender: string;
  ownerId: string;
  statusAdoption: boolean;
}

export const createAnimal = async ({
  name,
  species,
  image,
  bio,
  gender,
  ownerId,
  statusAdoption
}: CreateAnimalParams) => {
  try {
    const response = await api.post('/animal', {
      name,
      species,
      image,
      bio,
      gender,
      ownerId,
      statusAdoption
    });

    return response.data;
  } catch (error) {
    console.error('Error creating animal', error);
    throw new Error();
  }
};

export const getUserByEmail = async (userEmail: string) => {
  try {
    const response = await api.get(`/user/email/${userEmail}`);

    return response.data;
  } catch (error) {
    console.error('Error getting this user by e-mail', error);
    throw new Error();
  }
};

interface CreateCampaignParams {
  name: string;
  description: string;
  image: string;
  target: number;
  startDate: Date | null;
  deadline: Date | null;
  creatorId: string;
}

export const createCampaign = async ({
  name,
  description,
  image,
  target,
  startDate,
  deadline,
  creatorId
}: CreateCampaignParams) => {
  try {
    const response = await api.post('/campaign', {
      name,
      description,
      image,
      target,
      startDate,
      deadline,
      creatorId
    });

    return response;
  } catch (error) {
    console.error('Error creating this campaign', error);
    throw new Error();
  }
};

export const createUser = async ({
  name,
  email,
  password,
  birthdate,
  phone
}: UserParams) => {
  try {
    const response = await api.post('/user', {
      name,
      email,
      password,
      birthdate,
      phone
    });

    return response.data;
  } catch (error) {
    console.error('Error creating user', error);
    throw new Error();
  }
};


export const getCampaignById = async(campaignId: string) => {
  try {

    const response = await api.get(`/campaign/${campaignId}`)

    return response.data

  } catch (error) {
    console.error('Error getting campaign by ID', error);
    throw new Error();

  }
}
