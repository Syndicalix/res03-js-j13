/*let Header = {  
    data() {  
        return {  
            title: "Ceci est le titre de mon article",  
            content : "Ceci est le contenu de mon article"  
        }  
    },  
    template: `  
    <article>        
        <h2>{{ this.title }}</h2>
        <p>            
            {{ this.content }}        
        </p>    
    </article>    
    `};  
  
export { Header };


===================================== */

import{ Nav } from "./compenents/nav.js";

let Header = {

    components : {
      Nav,
    }, 


    template:   
       <header>
       <Nav/>
       </header>
    
};

export { Header };