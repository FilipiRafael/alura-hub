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

export async function criarRepositoriosDoUsuario(postId, nome, data) {
  try {
    await api.post(`/repos/`, {
      name: nome,
      data: data,
      postId: postId,
    });
    return 'sucesso';
  } catch (err) {
    console.error(err);
    return 'erro';
  }
};

export async function deletarRepositoriosDoUsuario(id) {
  try {
    await api.delete(`/repos/${id}`);
    return 'sucesso';
  } catch (err) {
    console.error(err);
    return 'erro';
  }
};