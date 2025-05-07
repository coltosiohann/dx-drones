import React from 'react';

const TestComponent = () => {
  return (
    <div style={{ 
      backgroundColor: '#0a0a14', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '20px' }}>DX-DRONES Test Component</h1>
      <p>If you can see this, React is working correctly!</p>
    </div>
  );
};

export default TestComponent;
