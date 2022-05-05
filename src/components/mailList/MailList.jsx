import "./mailList.css";

function MailList() {
  return (
    <div className= "mail">
        <h1 className= "mailTitle">¡Suscribite y enterate de todas las novedades! </h1>
        <span className=  "mailDesc">Obtene nuestro ebook gratis con nuestras 25 recetas más visitadas</span>
        <div className= "mailInputContainer">
            <input type= "text" placeholder= "Email" />
            <button>Suscribite</button>
        </div>
    </div>
  )
}

export default MailList