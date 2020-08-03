const URL = 'http://localhost:8080/categorias';
function getAllWithVideos() {

  return fetch(`${URL}?_embed=videos`)
    .then(async (resp) => {
      if (resp.ok) {
        const dadosResp = await resp.json();
        return dadosResp;
      }
      throw new Error('Não foi possivel conectar a api');
    });
}

function getAll() {
  return fetch(URL)
    .then(async (resp) => {
      if (resp.ok) {
        const dadosResp = await resp.json();
        return dadosResp;
      }
      throw new Error('Não foi possivel conectar a api');
    });
}

export default {
  getAllWithVideos, getAll,
};
