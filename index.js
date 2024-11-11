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

let timeoutId;
const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }//very clever method here of not allowing the api search until a 1000ms have passed where the user stopped typing
  timeoutId = setTimeout(() => {
    fetchData(event.target.value)
  }, 1000);
}

const input = document.querySelector('input');
input.addEventListener('input', onInput);