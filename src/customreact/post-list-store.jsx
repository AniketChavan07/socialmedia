import { createContext, useReducer } from "react";

const Postlist = createContext({
Postlist :[],
addPost:()=>{},
deletePost:()=>{},


});//context api 

function PostlistProvider({ children }) {

const[Postlist,dispatchPostlist] = useReducer()

const addPost=()=>{

}
const deletePost=()=>{
    
}

  

    
    return (
        <PostlistProvider value={
           { Postlist:Postlist,
            addPost:addPost,
            deletePost:deletePost}
        
        
        }>{children}</PostlistProvider>

    );

}
export default PostlistProvider;
// any children are passed in a component is a  wrapped in a post list provider
//there are use a reducer because there are a no of post there are given a two arguments one is a reducer function and second is a default values
//for a auto complete we use a create context