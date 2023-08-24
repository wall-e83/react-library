class Books{

     title: string;
     author: string;
     description: string;
     copies : number;
     copiesAvailable: number;
     category: string;
     img: string;

    constructor (title: string, author: string, description: string, copies: number, copiesAvailable: number, category: string, img: string){
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.img = img;
    }
}

export default Books;