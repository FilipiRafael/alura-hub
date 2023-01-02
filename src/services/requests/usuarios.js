import api from '../api';

export async function buscaUsuario(nomeUsuario) {
  try {
    const result = await api.get(`/users?login=${nomeUsuario}`);
    return result.data[0];
  } catch (err) {
    console.error(err);
    return {};
  }
};