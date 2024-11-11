const fetchData = async() => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'fec20d8a',
      s: 'Avengers',
      i: 'tt3896198' //unsure what this is but in url from api email
    }
  });
  
  console.log(response.data);
};

fetchData();