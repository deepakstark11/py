import React from 'react';
import logo from '../img/icon.png'
// import { Canvas } from '@react-three/fiber'
// import Box from '../components/Animation/Box'

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        flexDirection: 'column',
        height: '50vh',
          }}
    >
      {/* <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[2, 3, 0]} />
    </Canvas> */}
    <br></br>
    
    <img src={logo} alt="Logo" height="40px" width="40px" />

    <h1 style={{ color: '#fff', font: 'Josefin Sans' }}>WE'RE LAUNCHING SOON</h1>
    <br></br>
    <br></br>
    <br></br>
    
    <h3 style={{ color: '#fff', font: 'Open sans' }}>Currently Under Development</h3>

      </div>
  );
};
  
export default Home;