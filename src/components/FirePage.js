import React from 'react';
import fire from "../Fire";

function FirePage(){

    const [songs, setSongs]=React.useState([]);
    const [song , setSong]=React.useState({
        title: "",
        album:"",
        year:"",
    });
    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    React.useEffect(()=>{
       let newItems = [];

       db.collection("songs").get().then(function(snapshot){
           snapshot.forEach(function(doc){
               const object = doc.data();

               let item ={
                   title: object.title,
                   album:object.album,
                   year:object.year,
                   id:doc.id
               };

               newItems.push(item);

           });

           setSongs(newItems);
       });


    },[db, submit]);

    const handleChange = prop => event =>{
        setSong({
            ...song, [prop]: event.target.value
        });
    };

    const handleSubmit = ()=>{
        db.collection("songs").add(song).then(()=>{
            setSong({
                title:"",
                album:"",
                year:""
            });
            setSubmit(!submit);
        })
    };

    const handleDelete = (id)=>{
        db.collection("songs").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };

    const songEles = songs.map((sng, idx)=>
        <div key={idx} onClick={()=>handleDelete(sng.id)}>
            <h1>{sng.title}</h1>
            <h3>{sng.album}</h3>
            <h6>{sng.year}</h6>
        </div>
    );

    return(
        <div>
            <div>{songEles}</div>
            <input placeholder={"Title..."} onChange={handleChange("title")}/>
            <input placeholder={"Album..."} onChange={handleChange("album")}/>
            <input placeholder={"Year..."} onChange={handleChange("year")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FirePage;