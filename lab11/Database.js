import MongoClient from 'mongodb';

const URL = "mongodb+srv://BrookeEden:6ZShvtTHyHjMx0zB@cluster0.yuzwq.mongodb.net";

//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!

class Database {
    constructor() {
      this.collection = null;
      this.database = null;
      this.connection = null;
    
  }
//async MUST have await to work!!
    async connect(database, collection) {
      this.connection = await MongoClient.connect(URL);
      this.database = this.connection.db(database);
      this.collection = this.database.collection(collection);
    }
    
    async createOne(ISBN, title, author, description) {
      if (this.collection != null) {
        const result = await this.collection.insertOne({"ISBN": ISBN, "title": title, "author": author, "description": description});
            return {"ISBN": ISBN, "title": title, "author": author, "description": description};
        }
      else {
            return null;
      }
    }
    async readOne(ISBN) {
      if (this.collection !=null) {
        const result = await this.collection.findOne( {
          "ISBN": ISBN });
            return{result};
      }
      else {
            return{book: "not found"};
      }
    }
    async readMany(title, author) {
        if (this.connection != null) {
          const result = await this.collection.findMany( {
            "title":title,
            "author": author});
              return{"title": title, "author": author};
          }
        else {
            return{book: "not found"};
        }    
      }
// do we add ISBN to the ()?
    async updateOne(ISBN,title, author, description) {
        if(this.collection != null) {
          const result = await this.collection.updateOne({"ISBN": ISBN}, 
          {$set: {"title": title}, "author": author, "description": description});
            return{"title": title, "author": author, "description":description}; } 
        else {
            return null;
        }
    }
    async deleteOne(ISBN) {
        if (this.collection != null) {
          const result = await this.collection.deleteOne({"ISBN":ISBN});
            return {"deleted": result.deletedCount};
           }
        else {
            return{"deleted":0};
           }
    }  
close() { 
  if(this.collection !=null ) {
  this.collection.close();
    }
  }
};
export default Database;