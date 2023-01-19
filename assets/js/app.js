import { Main } from "./compenents/Main.js";  
import { Header } from "./compenents/Header.js";
import { Footer } from "./compenents/Footer.js";
  
let App = {  
    components : {  
      Header, Main, Footer
    },  
    template: `  
    
    
    <Header />
    
    <Main />
    
    <Footer />

    `
};  
  
export { App };