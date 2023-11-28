import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo({ videoId }) {
  const opts = {
    height: '340px', // 16:9 aspect ratio (9/16 * 100)
    width: '480px',
    playerVars: {
      autoplay: 0,
      controls: 1,
      showinfo: 0,
      volume: 0.1,
    },
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Define a altura da div para preencher toda a modal
  };

  // Adicione estilos específicos para dispositivos móveis
  const mobileStyles = {
    height: '70%',
  };

  // Use media queries para aplicar os estilos móveis quando a largura da tela for menor que um certo limite (por exemplo, 768px)
  if (window.innerWidth < 768) {
    Object.assign(opts, { ...mobileStyles });
  }

  return (
    <div style={containerStyle}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default YouTubeVideo;
