let Nav = {
    data() {
        return {
            li: [
                "Accueil",
                "A propos",
                "Contact",

            ]
        }
    },
    template:  
    <nav>
       <ul>
        <li v-for="texte in li"> {{ texte }} </li>
       </ul>
       </nav>
    
};

export { Nav };