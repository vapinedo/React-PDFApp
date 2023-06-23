import { useNavigate } from "react-router-dom";

const UsuarioNuevo = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header className="page-header">
                <h1>
                    Usuario <small className="text-muted">nuevo</small>
                </h1>
                <button onClick={() => navigate("/usuario-nuevo")} className="btn btn-primary">Nuevo</button>
            </header>

            <section>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombres" className="form-label">Nombres</label>
                        <input type="text" className="form-control" id="nombres" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="primerApellido" className="form-label">Primer Apellido</label>
                        <input type="text" className="form-control" id="primerApellido" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="segundoApellido" className="form-label">Segundo Apellido</label>
                        <input type="text" className="form-control" id="segundoApellido" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </section>
        </div>
    );
};

export default UsuarioNuevo;