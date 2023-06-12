import GeneratePDf from "./components/GeneratePDF";
import Navbar from "./components/UI/Navbar";
import UsuarioAdmin from "./components/Usuarios/UsuarioAdmin";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container py-5">
        <UsuarioAdmin />
      </main>
      {/* <GeneratePDf /> */}
    </>
  );
};

export default App;