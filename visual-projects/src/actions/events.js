import { types } from "../types/types";
import { fetchConToken } from "../helpers/ferchConToken";
import axios from "axios";
import Swal from "sweetalert2";
let usuario = JSON.parse(sessionStorage.getItem("usuarioActivo"));

export const gestionAddFacultades = (event) => ({
  type: types.gestionAddFacultades,
  payload: event,
});

export const gestionDeletedFacultades = (event) => ({
  type: types.gestionDeletedFacultades,
  payload: event,
});

export const openModalRegistrarDirector = () => ({
  type: types.uiOpenModalRegistrarDirector,
});

export const closeModalRegistrarDirector = () => ({
  type: types.uiCloseModalRegistrarDirector,
});

export const actualizarVistaLideres = (event) => ({
  type: types.actualizarVistaUsuariosLideres,
  payload: event,
});

export const actualizar = (event) => ({
  type: types.actualizar,
  payload: event,
});

export const openModalEditarLider = () => ({
  type: types.uiOpenModalEditarLider,
});

export const closeModalEditarLider = () => ({
  type: types.uiCloseModalEditarLider,
});

export const gestionAddLider = (event) => ({
  type: types.gestionAddLider,
  payload: event,
});

export const gestorProyecto = (event) => ({
  type: types.gestionProyectoNombre,
  payload: event,
});

export const gestorIDProyecto = (event) => ({
  type: types.gestionIdProyecto,
  payload: event,
});

export const gestorIDLider = (event) => ({
  type: types.gestionIdLider,
  payload: event,
});

export const gestorObjProyecto = (event) => ({
  type: types.gestionObjProyecto,
  payload: event,
});

export const openModalAsignarLider = () => ({
  type: types.uiOpenModalAsignarLider,
});
export const openCloseAsignarLider = () => ({
  type: types.uiCloseModalAsignarLider,
});

export const closeNavbar = () => ({
  type: types.uiCloseNavbar,
});

const gestionGuardarProyecto = (event) => ({
  type: types.gestionProyecto,
  payload: event,
});

const gestionFacultades = (event) => ({
  type: types.gestionAddFacultades,
  payload: event,
});

const gestionGuardarProductos = (event) => ({
  type: types.gestionProductos,
  payload: event,
});

const gestionGuProgramas = (event) => ({
  type: types.gestionPrograma,
  payload: event,
});

const gestionGuardarProgramas = (programas) => ({
  type: types.gestionAddProgramas,
  payload: programas,
});

const gestionAlmacenarProductos = (event) => ({
  type: types.gestionProducto,
  payload: event,
});

const gestionAlmacenarMetas = (event) => ({
  type: types.gestionMetas,
  payload: event,
});

const gestionAlmacenarProyectos = (event) => ({
  type: types.gestionProyectos,
  payload: event,
});

const gestionAlmacenarLideres = (event) => ({
  type: types.gestionLideres,
  payload: event,
});

const gestionAlmacenarFacultades = (event) => ({
  type: types.gestionFacultades,
  payload: event,
});

export const gestorGuardarNombreFacultad = (event) => ({
  type: types.gestionAddNombreFacultad,
  payload: event,
});

/**
 * Consultas a las Apis
 */

/**
 * Consusta de los proyectos
 * @param {*} nombreProyecto se hereda de
 * @returns
 */
/** Dirección de la localización del server. */

const urlServer = "http://localhost/Apis";

export const consutaTipo = () => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultasTipo", "");
    const res = await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        console.log(resJson)
       dispatch(gestionAlmacenarFacultades(resJson.data.datos));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consultarLideres = () => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultar_lideres", "");
    await axios
      .post(urlServer + "/lider_proyecto.php", formData)
      .then((resJson) => {
        console.log(resJson.data.datos);
        dispatch(gestionAlmacenarLideres(resJson.data.datos));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consultarProyectos = () => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("buscarProyectoTodos", "");
    const res = await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        dispatch(gestionAlmacenarProyectos(resJson.data.datos));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consultarProyecto = (nombreProyecto) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultarProyecto", "1");
    formData.append("nombreProyecto", nombreProyecto);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        console.log(resJson);
        dispatch(gestionGuardarProyecto(resJson.data.datos[0]));
        //setProyecto(resJson.data.datos[0])
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

/**
 * Meotodo para consultar los proyectos del lider mediante su id.
 * @param {*} idLider_proyecto se hereda del Storange del login.
 * @returns El proyecto asignado por la coordinadora.
 */
export const consultarProyectosLider = (idLider_proyecto) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("identificacion", idLider_proyecto);
    await axios
      .post(urlServer + "/lider.php", formData)
      .then((resJson) => {
        dispatch(gestorObjProyecto(resJson.data.datos));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consutarFacultades = () => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultasTipo", "1");
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        dispatch(gestionFacultades(resJson.data.datos));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consutarProductos = (idProyecto) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultarProductos", "1");
    formData.append("idProyecto", idProyecto);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        //console.log(resJson.data)
        dispatch(gestionGuardarProductos(resJson.data.datos));
        //  setPrograma(resJson.data.datos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const registrarPrograma = (idProyecto, idPrograma) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("registrarPrograma", "1");
    formData.append("idProyecto", idProyecto);
    formData.append("idPrograma", idPrograma);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        dispatch(consultarProyectosLider(usuario.idLider_proyecto));

        Swal.fire(
          "Listo",
          "Se ha registrado el tipo del proyecto con exito",
          "success"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const registrarPlaneacion = (idProyecto, objetivo, presupuesto) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("registrarPlaneacion", "1");
    formData.append("idProyecto", idProyecto);
    formData.append("objetivo", objetivo);
    formData.append("presupuesto", presupuesto);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        dispatch(consultarProyectosLider(usuario.idLider_proyecto));

        Swal.fire(
          "Listo",
          "Se ha registrado el tipo del proyecto con exito",
          "success"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const registrarMeta = (nombreMeta, DescripcionMeta, idPlaneacion) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("registrarMetas", "1");
    formData.append("nombreMeta", nombreMeta);
    formData.append("DescripcionMeta", DescripcionMeta);
    formData.append("idPlaneacion", idPlaneacion);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        dispatch(consultarProyectosLider(usuario.idLider_proyecto));
        dispatch(consultarMetas(idPlaneacion));
        Swal.fire("Listo", "Se ha registrado la meta con exito", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const registrarProductos = (nombreProducto, idProyecto, idMeta) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("registrarProductos", "1");
    formData.append("nombreProducto", nombreProducto);
    formData.append("idProyecto", idProyecto);
    formData.append("idMeta", idMeta);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        Swal.fire("Listo", "Se ha registrado el producto con exito", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consultarProductos = (idProyecto, idMeta) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultarProductos", "1");
    formData.append("idProyecto", idProyecto);
    formData.append("idMeta", idMeta);
    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        //dispatch(consultarProyectosLider(usuario.idLider_proyecto))
        dispatch(gestionAlmacenarProductos(resJson.data.datos));
        console.log(resJson.data.datos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const consultarMetas = (idPlaneacion) => {
  return async (dispatch) => {
    var formData = new FormData();
    formData.append("consultarMetas", "1");
    formData.append("idPlaneacion", idPlaneacion);

    await axios
      .post(urlServer + "/proyectos.php", formData)
      .then((resJson) => {
        //dispatch(consultarProyectosLider(usuario.idLider_proyecto))
        dispatch(gestionAlmacenarMetas(resJson.data.datos));
        // console.log(resJson.data.datos)
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
