import React,{useEffect} from 'react'
const About=()=>{
    useEffect(()=>{
        document.title="About || Courseo"
    },[])
 return(
<div>
    <br/>
    <h1 className="text-center"><b>Knowledge Sharing Platform</b></h1>
<p style={{fontSize:'20px', fontWeight:'500'}} className="text-center my-2">Courseo is focused on 
use of information and communications technology for learning. Students access class objectives, 
lecture notes, instructional materials, and exams via Internet. Students and instructor interact
 online via e-mail, chat rooms, and threaded discussions. .</p>
</div>
 );
};
export default About;