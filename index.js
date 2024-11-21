const fetchData = async(searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'fec20d8a',
      s: searchTerm
      // i: 'tt4154756' //still not sure why search wont work without this i param (which is for a specific movie id)
    }
  });
  
  console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
  fetchData(event.target.value);
}
input.addEventListener('input', debounce(onInput, 500));

