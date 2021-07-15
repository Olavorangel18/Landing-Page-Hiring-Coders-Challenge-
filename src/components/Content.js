import React, {useState,useEffect} from 'react';
import menina from './assets/menina.svg'
import facebook from './assets/facebookBranco.svg'
import instagram from './assets/instagramBranco.svg'
import twitter from './assets/twiterBranco.svg'

export default function Content(props){

    
    const [email,setEmail] = useState("");
    const [listEmail, setlistEmail] = useState([])
    useEffect(() =>{
        let dados = localStorage.getItem('listEmail');
        dados = JSON.parse(dados);
        setlistEmail(dados);
    },[])
    function handleSubmitEmail(event){
    event.preventDefault();
    if(!listEmail.includes(email))
        listEmail.push(email)
        localStorage.setItem('listEmail',JSON.stringify(listEmail));
    setEmail("")
}
    return (
        <>
        <section>
        <img src={menina} className="illustration"></img>
            <div className="content">
                <p className="textFriday">{props.event}</p>
                <h1>{props.copy}</h1>
                <p className="description">{props.description}</p>
                <form onSubmit={handleSubmitEmail}>
                    <input value={email} onChange={(event) => {setEmail(event.target.value)}}type="Email" placeholder="Coloque seu email aqui"></input>
                    <button type="submit"><p class="submit">Enviar</p></button>
                </form>
            </div>
        </section>
        <footer>
        <div className="socialMedia1">
              <div className="social">
                <img src={facebook} className="icon" alt="Facebook Icon"></img>
                <p className="textSocial">EcommerceSystem</p>
              </div>
              
              <div className="social">
                <img src={twitter} className="icon space" alt="Twitter Icon"></img>
                <p className="textSocial">@EcommerceSystem</p>
              </div>
              
              <div className="social">
                <img src={instagram} className="icon space2" alt="Instagram Icon"></img>
                <p className="textSocial">@_EcommerceSystem</p>
              </div>
          </div>
        </footer>
        </>
    );
}