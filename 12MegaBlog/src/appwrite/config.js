// Appwrite configuration service

import conf from '../conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";      // Client and Account are class and ID is helper or utility object

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(          // createDocument is a service method of databases class provided by appwrite sdk
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,                          // document id. here we are using slug as document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){           // slug is document id. We are passing slug as first argument which is document id of the post to be updated and second argument is an object containing updated fields. userId is not updated. We want to keep the original userId.
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async deletePost(slug){        // taking only slug as argument which is document id of the post to be deleted
        try{
                await this.databases.deleteDocument(
                this.conf.appwriteDatabaseId,
                this.conf.appwriteCollectionId,
                slug
            )
            return true;                // return true if deletion is successful. We can also return await statement but here we are returning true.
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error", error);
            return false;               // return false if there is an error
        }
    }

    async getPost(slug){ 
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error); 
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", 
        "acive")]){                                          // queries can only be apllied when we have created an index in appwrite console. Here we are passing default query to get only published posts
            try{
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries,
                )
            }
            catch(error){
            console.log("Appwrite service :: getPost :: error", error); 
            return false;
        }
    }

    // file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) 
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error); 
            return false;
        }
    }

    async deleteFile(fileId){
        try{
                await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error); 
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service();
export default service;