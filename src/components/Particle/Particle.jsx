import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { particlesConfig } from './config';

export const ParticleWave = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="particle"
      options={particlesConfig}
      init={particlesInit}
    />
  );
};
