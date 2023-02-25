export const particlesConfig = {
  // background: {
  //   color: {
  //     value: '#aa55ff',
  //   },
  // },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#7c8661',
    },
    links: {
      color: '#7c8661',
      distance: 200,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};
