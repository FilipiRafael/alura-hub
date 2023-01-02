import api from '../api';

export async function pegarRepositorios(id) {
  try {
    const result = await api.get(`/repos?postId=${id}`);
    return result.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export async function salvarRepositoriosDoUsuario(postId, nome, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    });
    return 'sucesso';
  } catch (err) {
    console.error(err);
    return 'erro';
  }
};