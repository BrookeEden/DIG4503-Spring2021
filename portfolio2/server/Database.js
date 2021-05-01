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
    
    async createOne(number, title, director, rate) {
      if (this.collection != null) {
        const result = await this.collection.insertOne({
          "number": number, 
          "title": title, 
          "director": director, 
          "rate": rate
        });
            return {
              "number": number,
              "title": title, 
              "director": director, 
              "rate": rate};
            }
      else {
            return null;
      }
    }

    async readOne(number) {
      if(this.collection != null) {
        // This will return the document or null.
        const result = await this.collection.findOne({"number": number});
         /* if(result == null)*/  return{result};
            // result = {movie: "not found"};
          } 
          else {
            return {result: "not found"};
        }
    }

    async updateOne(number, title, director, rate) {
        if(this.collection != null) {
          const result = await this.collection.updateOne({"number": number}, 
          {$set: {"title": title, "director": director, "rate": rate}
          });
            return{"title": title, "director": director, "rate":rate}; 
         } 
        else {
            return null;
        }
      }
  
    async deleteOne(number) {
        if(this.collection != null) {
          const result = await this.collection.deleteOne({"number": number});
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