import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://www.linkpicture.com/q/gb.png"
              title="Gearbest clone"
              description="Gearbest is an online shopping website where you can purchase products online of daily uses. It have so many categories for different product according to the needs of users. "
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://gearbestclone.netlify.app/"
              a="https://github.com/Vivek-Badole/gearbest_masai_clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://www.linkpicture.com/q/purplle.png"
              title="Purplle clone"
              description="Purplle is an beauty products online purchasing website.This site provides so many beauty products categories."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | Express | Nodejs "
              link="https://yesstyleclone.netlify.app/"
              a="https://github.com/Vivek-Badole/purpleclone"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/link.png"
              title="LinkedIn"
              description="This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development."
              tech="Tech-Stacks"
              techD="React | Redux | Firebase | Styled-Components "
              link="https://linkedin-production-app.web.app/"
              a="https://github.com/pummysh/linkedin-clone-project"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
