const { default: axios } = require('axios');
const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  let lista = [];
  let contador = 0;
  const { input } = req.query;
  const { data } = await axios(`https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`);
  for(let i = 0; i < data.values.length; i++){
    for(let j = 0; j < data.values.length; j++){
      if(input == Number(data.values[i].h_in)+Number(data.values[j].h_in))
      {
        contador = contador + 1;
        lista.push({"id": contador,"primerJugador": data.values[i].first_name + " " + data.values[i].last_name, "segundoJugador": data.values[j].first_name + " " + data.values[j].last_name});
      }
    }
  }
  console.log(lista)
  return resp.json({"resultado": lista});
};

module.exports = { getPairsOfPlayers };
