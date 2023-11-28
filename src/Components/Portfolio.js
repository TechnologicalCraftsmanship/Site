import React, { Component,useState } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Modal from "react-modal"; // Importe o react-modal
import YouTubeVideo from './YouTubeVideo';
import ImageCarousel from './ImageCarousel';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  'src/Components/imagens/01.png',
  
  
  // Adicione mais URLs de imagens, se necessário
];

let id = 0;


class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedProject: null,
    };
  }

  openModal = (project) => {
    this.setState({
      showModal: true,
      selectedProject: project,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedProject: null,
    });
  };

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      let projectImage = "images/portfolio/" + project.image;

      const projectImages = project.images.map((image, index) => {
        return (
          <div key={index}>
            <img src={`images/portfolio/${image}`} alt={project.title} />
          </div>
        );
      });

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" 
          style={{ 
            borderRadius: "30px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <Zmage
              alt={project.title}
              src={projectImage}
              onClick={() => this.openModal(project)} 
              style={{ 
                borderRadius: "20px",
                border:"2px"
              }}              
            />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projetos dos Alunos</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>

        {/* Modal */}
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          swipeDirection='down'
          contentLabel="Project Description"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              top: "10%",
              left: "2%",
              transform: "translate(0%, 0%)",
              //minHeight: "40%",
              //minWidth: "50%",
              maxWidth: "1300px",
              maxHeight:"90%",
              border: "none",
              borderRadius: "8px",
              padding: "20px",
              overflow: "auto",
              scrollbarWidth: "thin",
            },
            
          }}
        >
          <button
            onClick={this.closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "red",
            }}
          >
            &times;
          </button>
          {this.state.selectedProject && (
            <div>
              <h2>{this.state.selectedProject.title}</h2>
              <p>{this.state.selectedProject.description}</p>
              <h6>{this.state.selectedProject.alunos}</h6>
              <Carousel className="carrosel"showArrows={true} showThumbs={true}>
      {this.state.selectedProject.images.map((image, index) => (
        <div key={index}>
          <img src={`images/portfolio/${image}`} alt={this.state.selectedProject.title} />
        </div>
      ))}
    </Carousel>
     

    <div style={{  display: 'flex', alignItems: 'center'}}>
      <span style={{ maxWidth: '40%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {this.state.selectedProject.text}
      </span>
                {this.state.selectedProject.video && (
                  <YouTubeVideo videoId={this.state.selectedProject.video} />
                )}
               

              </div>
              <p></p>
              <a href={this.state.selectedProject.url} target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
              
            </div>
          )}
        </Modal>
      </section>
    );
  }
}

export default Portfolio;
