const imageAssets = {
  'AN1.png': new URL('../assets/images/AN1.png', import.meta.url).href,
  'AN2.png': new URL('../assets/images/AN2.png', import.meta.url).href,
  'AN3.png': new URL('../assets/images/AN3.png', import.meta.url).href,
  'AN4.png': new URL('../assets/images/AN4.png', import.meta.url).href,
  'AN5.png': new URL('../assets/images/AN5.png', import.meta.url).href,
  'BBG1.jpg': new URL('../assets/images/BBG1.jpg', import.meta.url).href,
  'BBG2.jpg': new URL('../assets/images/BBG2.jpg', import.meta.url).href,
  'BBG3.jpg': new URL('../assets/images/BBG3.jpg', import.meta.url).href,
  'BBG4.jpg': new URL('../assets/images/BBG4.jpg', import.meta.url).href,
  'BBG5.jpg': new URL('../assets/images/BBG5.jpg', import.meta.url).href,
  'BBG6.jpg': new URL('../assets/images/BBG6.jpg', import.meta.url).href,
  'FOA1.png': new URL('../assets/images/FOA1.png', import.meta.url).href,
  'FOA2.png': new URL('../assets/images/FOA2.png', import.meta.url).href,
  'FOA3.png': new URL('../assets/images/FOA3.png', import.meta.url).href,
  'FOA4.png': new URL('../assets/images/FOA4.png', import.meta.url).href,
  'FOA5.png': new URL('../assets/images/FOA5.png', import.meta.url).href,
  'PROFILEP-mobile.jpg': new URL('../assets/images/PROFILEP-mobile.jpg', import.meta.url).href,
  'SRMS1.png': new URL('../assets/images/SRMS1.png', import.meta.url).href,
  'SRMS2.png': new URL('../assets/images/SRMS2.png', import.meta.url).href,
  'SRMS3.png': new URL('../assets/images/SRMS3.png', import.meta.url).href,
  'SRMS4.png': new URL('../assets/images/SRMS4.png', import.meta.url).href,
  'SRMS5.png': new URL('../assets/images/SRMS5.png', import.meta.url).href,
  'SRMS6.png': new URL('../assets/images/SRMS6.png', import.meta.url).href,
  'SRMS7.png': new URL('../assets/images/SRMS7.png', import.meta.url).href,
  'TDL1.png': new URL('../assets/images/TDL1.png', import.meta.url).href,
  'TDL2.png': new URL('../assets/images/TDL2.png', import.meta.url).href,
  'TDL3.png': new URL('../assets/images/TDL3.png', import.meta.url).href,
  'TDL4.png': new URL('../assets/images/TDL4.png', import.meta.url).href,
  'awslogo.png': new URL('../assets/images/awslogo.png', import.meta.url).href,
  'clogo.png': new URL('../assets/images/clogo.png', import.meta.url).href,
  'csslogo.png': new URL('../assets/images/csslogo.png', import.meta.url).href,
  'firebase.png': new URL('../assets/images/firebase.png', import.meta.url).href,
  'htmllogo.png': new URL('../assets/images/htmllogo.png', import.meta.url).href,
  'javalogo.png': new URL('../assets/images/javalogo.png', import.meta.url).href,
  'jslogo.png': new URL('../assets/images/jslogo.png', import.meta.url).href,
  'leet.webp': new URL('../assets/images/leet.webp', import.meta.url).href,
  'mysqllogo.png': new URL('../assets/images/mysqllogo.png', import.meta.url).href,
  'nextjslogo.png': new URL('../assets/images/nextjslogo.png', import.meta.url).href,
  'pythonlogo.webp': new URL('../assets/images/pythonlogo.webp', import.meta.url).href,
  'react.png': new URL('../assets/images/react.png', import.meta.url).href,
  'taillogo.png': new URL('../assets/images/taillogo.png', import.meta.url).href,
  'ui sample.png': new URL('../assets/images/ui sample.png', import.meta.url).href,
  'ui sample2.png': new URL('../assets/images/ui sample2.png', import.meta.url).href,
};

export const image = (name) => {
  if (!imageAssets[name]) {
    throw new Error(`Unknown image asset: ${name}`);
  }
  return imageAssets[name];
};

export const resumePdf = new URL('../assets/resume/anish_resume.pdf', import.meta.url).href;
