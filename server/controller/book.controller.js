import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{
   try{                               //to perform in synchronus way we use async and await
    const book=await Book.find();
    res.status(200).json(book);
   }catch(erroe) {
        console.log("Error:" ,error);
        res.status(500).json(error);
   }
};