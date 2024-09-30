// Komponen Header
const Header = () => {
  return (
    <header className="header">
      <h1>Buat Header Menggunakan JSX</h1>
      <p>Tutorial JSX Sederhana</p>
    </header>
  );
};

// Komponen Table
const Table = () => {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Nama</th>
          <th>Jenis Kelamin</th>
          <th>Jurusan</th>
          <th>No Whatsapp</th>
          <th>Alamat</th>
        </tr>
      </thead>
      <tbody>
       
          <tr>
           
              <td>
                Juis Husage
              </td>
              <td>
                Laki-laki
              </td>
              <td>
                Informatika
              </td>
              <td>
                082198588857
              </td>
              <td>
                Kanaan
              </td>
           
           
          </tr>
          <tr>
           
              <td>
                Juis HUSAGE
              </td>
              <td>
                lAKI-LAKI
              </td>
              <td>
                iNFORMATIKA
              </td>
              <td>
                Juis HUSAGE
              </td>
              <td>
                Juis HUSAGE
              </td>
           
           
          </tr>
          <tr>
           
              <td>
                Juis HUSAGE
              </td>
              <td>
                lAKI-LAKI
              </td>
              <td>
                iNFORMATIKA
              </td>
              <td>
                Juis HUSAGE
              </td>
              <td>
                Juis HUSAGE
              </td>
           
           
          </tr>
          <tr>
           
              <td>
                Juis HUSAGE
              </td>
              <td>
                lAKI-LAKI
              </td>
              <td>
                iNFORMATIKA
              </td>
              <td>
                Juis HUSAGE
              </td>
              <td>
                Juis HUSAGE
              </td>
           
           
          </tr>
          <tr>
           
              <td>
                Juis HUSAGE
              </td>
              <td>
                lAKI-LAKI
              </td>
              <td>
                iNFORMATIKA
              </td>
              <td>
                Juis HUSAGE
              </td>
              <td>
                Juis HUSAGE
              </td>
           
           
          </tr>
        
      </tbody>
    </table>
  );
};

// Komponen utama (App)
const App = () => {
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
};

// Render App ke DOM
ReactDOM.render(<App />, document.getElementById("app"));