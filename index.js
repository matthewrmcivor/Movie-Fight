const fetchData = async(searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'fec20d8a',
      s: searchTerm
      // i: 'tt4154756' //still not sure why search wont work without this i param (which is for a specific movie id)
    }
  });
  
  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  for (let movie of movies) {
    const div = document.createElement('div');
    
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;
    
    document.querySelector('#target').appendChild(div);
  }
};
input.addEventListener('input', debounce(onInput, 500));