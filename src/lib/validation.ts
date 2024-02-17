import { browser } from '$app/environment';

export const isUserAgentMobile = () => {
  if (!browser) {
    return false;
  }

  const userAgent = navigator.userAgent;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
