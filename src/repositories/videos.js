const URL = 'http://localhost:8080/videos';
function create(objeto) {

  return fetch(URL, {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objeto),
  })
    .then(async (resp) => {
      if (resp.ok) {
        const dadosResp = await resp.json();
        return dadosResp;
      }
      throw new Error('Não foi possivel conectar a api');
    });
}

export default {
  create,
};
