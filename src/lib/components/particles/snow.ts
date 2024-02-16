export default {
  particles: {
    shape: {
      type: 'image',
      options: {
        image: {
          src: '/snow.svg',
        },
      },
    },
    opacity: {
      value: 0.15,
    },
    size: { value: { min: 32, max: 64 } },
    move: {
      enable: true,
      random: true,
      direction: 'bottom-left',

      speed: { min: 4, max: 6 },
      angle: { offset: 5, value: 10 },
      distance: { enable: true, distance: { min: 64, max: 128 } },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        sync: true,

        speed: { min: 1, max: 2 },
      },
    },
    number: {
      value: 16,
    },
  },
};
