import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/components.css";

const About =() => {
    return(
      <>
      <Header />
      <Navbar />
        <div className="about">
         <h1>About Us</h1>
         <section className="flex">
         <div className="profile">
         <h3>Seth Eggenburg </h3>
         <p> </p>
         <a href="http://">Github</a>
         </div>
         <div className="profile">
         <h3>Antonia Stancheva </h3>
         <p> </p>
         <a href="http://">Github</a>
         </div>
         <div className="profile">
         <h3>Jonathan Hummer</h3>
         <p> </p>
         <a href="http://">Github</a>
         </div>
         <div className="profile">
         <h3>Andrew Cerna </h3>
         <p> </p>
         <a href="http://">Github</a>
         </div>
         <div className="profile">
         <h3>Zawadi Brown </h3>
         <p> </p>
         <a href="http://">Github</a>
         </div>
         </section>
        </div>
        <Footer />
        </>
    );

};

export default About;