import React, { useState } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Modal from "react-modal";
import YouTubeVideo from "./YouTubeVideo";
import CustomImageCarousel from "./CustomImageCarousel";
import "./CustomImageCarousel.module.css"; // Importe os estilos CSS diretamente

const PortfolioItem = ({ project, onClick }) => (
  <div className="columns portfolio-item">
    <div
      className="item-wrap"
      style={{ border: "1px #ddd", borderRadius: "8px", padding: "1px" }}
    >
      <Zmage
        alt={project.title}
        src={`images/portfolio/${project.image}`}
        onClick={() => onClick(project)}
        className="portfolio-image"
        style={{
          border: "1px solid #ddd", // Adiciona uma borda simples
          borderRadius: "8px", // Adiciona bordas arredondadas, ajuste conforme necessário
        }}
      />
      <div className="portfolio-title" style={{ textAlign: "center" }}>
        {project.title}
      </div>
    </div>
  </div>
);

const ProjectModal = ({ selectedProject, closeModal }) => (
  <div>
    <h2>{selectedProject.title}</h2>
    <p>{selectedProject.description}</p>
    <h6>{selectedProject.alunos}</h6>
    <br />
    <br />

    <CustomImageCarousel images={selectedProject.images} />
    <br />
    <br />
    <br />

    <div className="modal-content">
      <span className="modal-text">{selectedProject.text}</span>
      <br />
      <br />
      <br />

      {selectedProject.video && (
        <YouTubeVideo videoId={selectedProject.video} />
      )}
      {selectedProject.video1 && (
        <YouTubeVideo videoId={selectedProject.video1} />
      )}
      {selectedProject.video2 && (
        <YouTubeVideo videoId={selectedProject.video2} />
      )}
      {selectedProject.video3 && (
        <YouTubeVideo videoId={selectedProject.video3} />
      )}
      {selectedProject.video4 && (
        <YouTubeVideo videoId={selectedProject.video4} />
      )}
      {selectedProject.video5 && (
        <YouTubeVideo videoId={selectedProject.video5} />
      )}
      {selectedProject.video6 && (
        <YouTubeVideo videoId={selectedProject.video6} />
      )}
      {selectedProject.video7 && (
        <YouTubeVideo videoId={selectedProject.video7} />
      )}
      {selectedProject.video8 && (
        <YouTubeVideo videoId={selectedProject.video8} />
      )}
    </div>

    <p></p>
    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
      Saiba mais
    </a>
  </div>
);

const Portfolio = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  if (!data) return null;

  const projects = data.projects.map((project, index) => (
    <PortfolioItem key={index} project={project} onClick={openModal} />
  ));

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row" style={{ borderRadius: "20%" }}>
          <div className="twelve columns collapsed">
            <h1>Projetos dos Alunos</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        swipeDirection="down"
        contentLabel="Project Description"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%", // Posição vertical no meio
            left: "50%", // Posição horizontal no meio
            transform: "translate(-50%, -50%)", // Centraliza o modal
            maxWidth: "1300px",
            maxHeight: "90%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            overflow: "auto",
            scrollbarWidth: "thin",
            position: "relative",
          },
        }}
      >
        <button
          onClick={closeModal}
          className="close-button"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          &times;
        </button>
        {selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
