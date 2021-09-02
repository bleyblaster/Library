import http from "../http-common";

class LibraryService{
    getByTitle(title:string){
        return http.get(`/search.json?title=${title}`);
    }
}

export default new LibraryService();