import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export default api;


interface CreateAnimalParams {
  name: string;
  species: string;
  image: string;
  bio: string;
  gender: string;
  ownerId: string;
  statusAdoption: boolean;
}

export const createAnimal = async ({name, species, image, bio, gender, ownerId, statusAdoption}: CreateAnimalParams) => {
  try { 

    const response = await api.post('/animal', {
      name,
      species,
      image,
      bio,
      gender,
      ownerId,
      statusAdoption
    })
    
    return response.data

  } catch (error) {
      console.error('Error creating animal', error);
      throw new Error;
  }

}

export const getUserByEmail = async(userEmail: string) => {
  try {
    const response = await api.get(`/user/email/${userEmail}`)

    return response.data

  } catch (error) {
      console.error('Error getting this user by e-mail', error);
      throw new Error;
  }
}


interface CreateCampaignParams {
  name: string;
  description: string;
  image: string;
  target: number;
  startDate: Date | null;
  deadline: Date | null;
  creatorId: string;
}

export const createCampaign = async ({name, description, image, target, startDate, deadline, creatorId}: CreateCampaignParams) => {
  try {

    const response = await api.post('/campaign', {
      name,
      description,
      image,
      target,
      startDate,
      deadline,
      creatorId
    })

    return response

  } catch (error) {
      console.error('Error creating this campaign', error);
      throw new Error;
  }
}
