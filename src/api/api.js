import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.filltext.com/?id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
});

export const usersAPI = {
    getUsers(rows, delay = null) {
        return instance.get(`&rows=${rows}${delay ? `&delay=${delay}`:''}`)
            .then(response => response.data)
    }
}