import axios from 'axios';

export interface Users {
  id: string;
  name: string;
  avater: string;
  username: string;
  isFollowing: boolean;
}

export interface tagsProps {
  id: string
  name: string
  count: number
}

export const getFollowers = async (): Promise<Users[]> => {
  try {
    const response = await axios.get('https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getFollowing = async (): Promise<Users[]> => {
    try {
      const response = await axios.get('https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  export const getResults = async ({ page, pageSize, keyword }: any): Promise<Users[]> => {
    try {
      const response = await axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  export const getTags = async (): Promise<tagsProps[]> => {
    try {
      const response = await axios.get('https://avl-frontend-exam.herokuapp.com/api/tags');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

