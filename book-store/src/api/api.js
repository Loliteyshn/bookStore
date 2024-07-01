import axios from 'axios';

let instanse = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

export const bookApi = {
    getBooks(inputValue, startIndex, pageSize) {
        return instanse.get(`?q=${inputValue}&startIndex=${startIndex}&maxResults=${pageSize}`)
            .then(response => response.data);
    },
    getBooksByPage(inputValue, pageNumber, pageSize) {
        return instanse.get(`?q=${inputValue}&startIndex=${pageNumber}&maxResults=${pageSize}`)
            .then(response => response.data);
    },
    getBook(id) {
        return instanse.get(`/${id}`)
            .then(response => response.data);
    }
}