export function getData() {
    return fetch('./assets/data/people.json')
    .then(
        function(response) {
          if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
              response.status);
              return;
          }
          // Examine the data in the response
          return response.json();
        }
    )
    .then(response => response)
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}