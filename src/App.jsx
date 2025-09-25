import './App.css'

function ProfileName(props) {
  return (
    <div className="name">
      <h1>{props.fname}<br />{props.lname}</h1>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <div className="photo">
        <img src="images/photo.jpeg" alt="Photo" />
      </div>

      <ProfileName fname="Ronian" lname="Gulles"/>
    </div>
  );
}

function Headings (props) {
  return (
    <h2>{props.title}</h2>
  );
}

function ContactsContainer(props) {
  return (
    <p><strong>{props.label}</strong><br />{props.value}</p>
  );
}

function Contacts() {
  return (
    <div className="contacts">
      <Headings title="Contact" />
      <ContactsContainer label="Address" value="Bulaon, City Of San Fernando, Pampanga" />
      <ContactsContainer label="Phone" value="+639945299310" />
      <ContactsContainer label="E-mail" value="gulles.ronian@gmail.com" />
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <Headings title="Skills" />
      <ul>
        <li>Knowledgeable in web technologies, such as HTML, CSS, JavaScript, React, and Node.js.</li>
        <li>Knowledgeable in database management and SQL for building data-driven applications.</li>
        <li>Strong problem-solving, critical thinking, and logical analysis skills.</li>
        <li>Excels in both individual and team-based work</li>
        <li>Driven to learn and master new IT trends.</li>
      </ul>
    </div>
  );
}

function Description() {
  return (
    <div className="description">
      <p>
        Passionate IT student with a strong foundation in software development and web technologies. Skilled in problem-solving, adaptable to new challenges, and capable of contributing to collaborative projects. Committed to continuous learning and staying current with emerging technologies.
      </p>
    </div>
  );
}

function EducationContainer(props) {
  return (
    <div className="edu-item">
      <div className="space"></div>
      <div className="program">
        <h3>{props.degree}</h3>
        <p><em>{props.school}</em></p>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <Headings title="Education" />

      <EducationContainer 
        degree="Bachelor of Science: Information Technology" 
        school="University of the Assumption - City of San Fernando, Pampanga" 
      />  

      <EducationContainer 
        degree="Senior High School: STEM Strand" 
        school="St. Nicolas College of Business and Technology - City of San Fernando, Pampanga" 
      />  
    </div>
  );
}

function ExperienceContainer(props) {
  return (
  <div className="exp-item">
    <div className="year">{props.year}</div>
    <div className="work">
      <h3>{props.position}</h3>
      <p><em>{props.company}</em></p>
      <ul>
        <li>{props.responsibility1}</li>
        <li>{props.responsibility2}</li>
        <li>{props.responsibility3}</li>
      </ul>
    </div>
  </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <Headings title="Experience" />
        <ExperienceContainer
          year="2024"
          position="IT Support Assistant"
          company="Jaela Cashew Trading"
          responsibility1="Set up and configured a biometric attendance system."
          responsibility2="Instructed employees on the proper usage of the biometric system."
          responsibility3="Assisted in basic troubleshooting of computers and office equipments."
        />
        <ExperienceContainer
          year="2022 - 2023"
          position="Sales Associate"
          company="Reanna's Food and Beverage Trading"
          responsibility1="Assisted customers in selecting products by provided clear information to guide their purchases."
          responsibility2="Handled daily sales computations and maintained digital sales records."
          responsibility3="Provided basic customer support to ensure smooth operations"
        />
        <ExperienceContainer
          year="2022"
          position="Computer Services Assistant"
          company="Sindalan Computer Shop"
          responsibility1="Assisted customers with troubleshooting common computer issues."
          responsibility2="Provided customer service for printing and photocopying needs."
          responsibility3="Maintained and ensured technical equipments were running smoothly and ready for use."
        />
    </div>
  );
}   



export default function Resume() {
  return (
    <div className="container">
      <div className="left">
        <Profile />
        <Contacts />
        <Skills />
      </div>

      <div className="right">
        <Description />
        <Education />
        <Experience />
      </div>
    </div>
  );
}
