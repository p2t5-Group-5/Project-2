import "../styles/about.css";

const About =() => {
  return(
    <>
      <div className="about">
        <h1>About Us</h1>
        <p> Welcome to our project! We are a team of passionate web developers who created this site to showcase the skills and technologies we've been learning in class. This project reflects our commitment to continuous learning, collaboration, and creativity in the world of web development. We’ve included links to our GitHub profiles so you can explore our work, follow our progress, and see how we bring ideas to life through code. Thank you for visiting — we look forward to connecting with you!</p>
        <section className="flex">
        <div className="profile">
        <div className="left">
          <h3>Seth Eggenburg </h3>
          <a href="http://">Github</a>
        </div>
        <div className="right"><p>Bio information</p></div>
        </div>
        <div className="profile">
        <div className="left">
          <h3>Antonia Stancheva </h3>
          <a href="http://">Github</a>
        </div>
        <div className="right"><p>Bio information </p></div>
        </div>
        <div className="profile">
          <div className="left">
            <h3>Jonathan Hummer</h3>
            <a href="http://">Github</a>
          </div>
          <div className="right"><p>Bio information</p></div>
        </div>
        <div className="profile">
          <div className="left">
            <h3>Andrew Cerna </h3>
            <a href="http://">Github</a>
          </div>
        <div className="right"><p>Bio information</p></div>
       </div>
       <div className="profile">
      <div className="left">
         <h3>Zawadi Brown </h3>
         <a href="http://">Github</a>
      </div>
       <div className="right"><p> Bio information</p></div>
       </div>
       </section>
      </div>
    </>
  );
};

export default About;