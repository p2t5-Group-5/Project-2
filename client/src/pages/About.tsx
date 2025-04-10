import "../styles/About.css";

const About =() => {
  return(
    <div className="about">
      <h1>About Us</h1>
      <p> Welcome to our project! We are a team of passionate web developers who created this site to showcase the skills and technologies we've been learning in class. This project reflects our commitment to continuous learning, collaboration, and creativity in the world of web development. We’ve included links to our GitHub profiles so you can explore our work, follow our progress, and see how we bring ideas to life through code. Thank you for visiting — we look forward to connecting with you!</p>
      <section className="profiles">
      <div className="profile">
        <div className="image-and-network">
          <h3>Zawadi Brown</h3>
          <img  src="https://media.licdn.com/dms/image/v2/C5603AQGicxW5rlLP4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656351109306?e=1749686400&v=beta&t=wFiNoaI2dSHq4CzeQ348oWdQEuvGeCUZhq_zV8vTPn4"
            alt="Zawadi Brown"className="profile-image"/>
          <a href="https://github.com/Zawadiflag12?tab=repositories"><img className="mini-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" /></a>
        </div>
        <div className="bio">
          <p>As an aspiring full-stack developer with a background in Allied Health, I bring a unique perspective to problem-solving, attention to detail, and user-centered design. My experience in healthcare has honed my ability to assess complex systems, identify inefficiencies, and implement solutions—skills that directly translate into developing intuitive and functional web applications.</p>
        </div>
      </div>
      <div className="profile">
        <div className="image-and-network">
          <h3>Andrew Cerna</h3>
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQF-rpb_uxt0KQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642613650768?e=1749686400&v=beta&t=2UDOtyoUY4-lwOq1No3h7ivHb9tVJHQTKszIBEsOv2A" alt="Andrew Cerna" className="profile-image"/>
          <a href="http://github.com/Amcerna/"><img className="mini-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" /></a>
        </div>
        <div className="bio">
        <p>Andrew is currently an aspiring web developer that has a history within the tech and engineering fields. He started his journey studying mechanical engineering at Syracuse University where he broadened his mind when it came to critical thinking and problem solving.  After graduating in late 2019, he decided to shift gears toward his original passion in technology. Post graduation he participated in bootcamps that allowed him get serval certification such as the CompTIA A+, AWS cloud practitioners, and AWS Solutions Architect. Today Andrew works Endeavor Streaming as an L2 support engineer but is looking to take the next step in his journey.  Currently he is looking to transition to a new role that will be more hands in development. One that allows him to work with and build the intricate information systems that allows websites to function.</p></div>
      </div>
      
      <div className="profile">
        <div className="image-and-network">
          <h3>Seth Eggenburg</h3>
          <img src= 'https://avatars.githubusercontent.com/u/190832220?v=4&size=64' alt="Seth Eggenburg" className="profile-image"/>
          <a href="https://github.com/SethEggz"><img className="mini-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" /></a>
        </div>
        <div className="bio">
        <p>Seth  Likes solving problems and building things. Is currently in a full stack coding class. He knows TS, JS, HTML, SQL, and CSS. he will be learning  python as well. Seth spends his free time playing games like Magic: The Gathering, Baltro, Fallout 76 and more.</p></div>
      </div>
      
      <div className="profile">
        <div className="image-and-network">
          <h3>Jonathan Hummer</h3>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHc2m1fPClZLA/profile-displayphoto-shrink_200_200/B56ZOuq4bXG8AY-/0/1733802297477?e=1749686400&v=beta&t=KpbaYuz0jcRi-yXZsxW7hQAXovwOt17obH1orLYgMPo" alt="Jonathan Hummer" className="profile-image"/>
          <div className="social-links">
            <a href="https://github.com/ItsJustJon">
              <img className="mini-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" />
            </a>
            <a href="https://www.linkedin.com/in/jonathanhummer/">
              <img className="mini-logo linkedin" src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" />
            </a>
          </div>
        </div>
        <div className="bio">
        <p>Jonathan has a demonstrated history of using his computer programming skills and logic to implement automation in business processes and reporting and develop forms and applications for use in financial, supply chain, operations, customer service, and commercial functions. However, much of that programming has been done with Visual Basic/VBA in the Microsoft Office Suite. Jonathan began the Columbia University Computer Programming Bootcamp in an effort to learn new, practical programming languages with an aim to deploy stable web applications designed to help businesses achieve their goals with bespoke programming written for their needs. You can contact Jonathan using the links to the left below the AI-generated headshot.</p></div>
      </div>
      <div className="profile">
        <div className="image-and-network">
          <h3>Antonina Stancheva</h3>
          <img src="https://avatars.githubusercontent.com/u/102912613?v=4" alt="Antonina Stancheva" className="profile-image"/>
          <a href="https://github.com/antoninast"><img className="mini-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" /></a>
        </div>
        <div className="bio">
        <p>With a degree in Finance, Antonina initially explored the world of finance, but soon discovered her passion lies in coding. As a JavaScript developer, she loves creating complex functionalities in a simple and understandable way, while also enjoying the challenge of hunting and resolving bugs.</p>
        </div>
      </div>
     </section>
    </div>
  );
};

export default About;