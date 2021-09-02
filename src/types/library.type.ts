export interface IDocLibrary{
        cover_i:number,
        has_fulltext:boolean,
        edition_count:number,
        title:string,
        author_name:any,
        first_publish_year:number,
        key:number,
        ia:[],
        author_key:[],
        public_scan_b:boolean,
        isWished:boolean
    
}
export  interface ILibrary{
    start: number,
    num_found:number,
    numFoundExact:boolean
    docs: IDocLibrary[]
}

export interface ILibraryWish{
    key:number,
    title:string,
    author_name:any
}

