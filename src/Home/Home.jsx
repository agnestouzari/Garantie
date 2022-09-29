import React from 'react';
import "../Home/Home.css"


export default function Default() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const societe = token['Partner'][0]['company_name'];
  const user = token['username'];

return(
<div>
<h1></h1>
<h1></h1>
    <br/>
    <div className="intro"><h1>Bienvenue {user} {societe} au site RedElectric de la gestion de la garantie.</h1>
    <br/>
    <h3><p>Nous voulons vous offrir le meilleur service pour la gestion de vos garanties. N'hésitez pas à remonter toutes vos remarques à l'adresse suivante : support@redelectric.fr</p></h3>
    </div>
</div> 
  );
}
