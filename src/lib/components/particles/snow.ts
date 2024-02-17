import type { IOptions, RecursivePartial } from '@tsparticles/engine';

export const desktop: RecursivePartial<IOptions> = {
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
    size: { value: { min: 16, max: 96 } },
    move: {
      enable: true,
      random: true,
      direction: 'bottom-left',

      speed: { min: 4, max: 6 },
      angle: { offset: 5, value: 10 },
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

export const mobile: RecursivePartial<IOptions> = {
  ...desktop,
  particles: {
    ...desktop.particles,
    number: { value: 6 },
    size: { value: { min: 8, max: 48 } },
    move: {
      ...desktop.particles?.move,
      speed: { min: 2, max: 4 },
    },
  },
};
