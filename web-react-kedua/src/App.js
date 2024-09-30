import React from 'react';
import './App.css';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',    
      alignItems: 'center',       
      justifyContent: 'center',   
      height: '100vh',            
      margin: 0
    }}>
      <h2 style={{ textAlign: 'center', color: '#008000' }}>Student Information</h2>
	  
	  <h3 style={{ texAligin: 'center',}}>Buat Student Profile information menggunakan React.JS</h3>

      <table style={{
        border: '1px solid black',
        borderCollapse: 'collapse',
        margin: '20px'             
      }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Nama</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>Juis Husage</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Fakultas</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>Ilmu Komputer</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Jurusan</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>Informatika</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Alamat</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>Wamena, Papua</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>NIM</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>105022210058</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Email</td>
            <td style={{ border: '1px solid black', padding: '20px' }}>husagejuis7@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
