import StatusError from '@util/error';
import axios from 'axios';

const getCep = async (value: string): Promise<void> => {
  try {
    const { status } = await axios.get(
      `https://cep.awesomeapi.com.br/json/${value}`,
    );
    if (status === 200) return;
  } catch (error) {
    throw new StatusError(422, 'ValidationError: postal_code is invalid');
  }
};

export default getCep;
