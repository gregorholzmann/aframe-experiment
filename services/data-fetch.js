import _ from 'lodash';
import { wpCreds } from './environment';

export async function getData() {
    try {
        // const token = await fetch('http://pluscitizen.com/wp-json/jwt-auth/v1/token', {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: '{"username": "' + wpCreds.username + '", "password" : "' + wpCreds.password + '"}'
        //     })
        //     .then(response => response.json())
        //     .then(response => response.token);
        return fetch('assets/data/people.json',
        {
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer" + token
            }
        })
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
        .then(function(response){
            let onlyVisible = _.filter(response, function(person, i) {
                person.id = i;
                return _.get(person, 'acf.show_on_staff_page');
            });
            return onlyVisible;
        })
        .then(response => response)
        .catch(function(err) {
            console.log('User fetch Error :-S', err);
        });
    }
    catch (err) {
        console.log('Token fetch failed', err);
    }
}