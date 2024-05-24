import { useEffect, useState } from "react";

function GithubProfil({user}) {

    const [userData, setuserData] = useState({
        userName: "",
        userDescription: "",
        avatarURL: "",
        followers: 0,
        following: 0,
        createdAt: "",
        updatedAt: "",
        reposURL: ""

    });

    const userURL = "https://api.github.com/users/" + user;
    const getUserDatas = () => {
        fetch( userURL )
            .then( (res) => res.json() )
            .then(
                (result) => {
                    setuserData({ 
                        ...userData,
                        userName : result.name,
                        avatarURL : result.avatar_url,
                        userDescription : result.bio,
                        followers : result.followers,
                        following : result.following,
                        createdAt : result.created_at,
                        updatedAt : result.updated_at,
                        reposURL : result.repos_url
                     });
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    useEffect( () => { getUserDatas() }, []);

    return (
      <div className="GithubProfil">
        <h3><strong>{userData.userName}</strong></h3>
        <img src={userData.avatarURL} alt="Photo of the user" width="200"></img>
        <p className="mt-3">{userData.userDescription}</p>
        <p>Abonnées : {userData.followers}</p>
        <p>Abonnements : {userData.following}</p>
        <p>Créé le : {userData.createdAt}</p>
        <p>Modifié le : {userData.updatedAt}</p>
        <p>URL repositories : <a href={userData.reposURL}>{userData.reposURL}</a></p>
      </div>
    );
  }
  
  export default GithubProfil;