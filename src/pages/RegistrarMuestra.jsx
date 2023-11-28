import React,{useEffect,useRef} from "react";
import api from "../components/api";
import { useNavigate } from "react-router-dom";



const RegistrarMuestra = () => {
    const fecha_creacion = useRef();
    const codigo_externo = useRef();
	const consecutivo_informe = useRef();
	const muestreo = useRef();
	const preparacion_muestra  = useRef();
    const cantidad  = useRef();
    const tipo_molienda = useRef();
    const tipo_fermentacion  = useRef();
	const densidad_cafe_verde = useRef();
	const fecha_procesamiento = useRef();
	const tipo_tostion  = useRef();
	const tiempo_fermentacion = useRef();
	const codigo_muestra = useRef();
	const actividad_agua = useRef();
    const tiempo_secado = useRef();
	const presentacion = useRef();
	const estado = useRef();
	const cafes_id = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        fecha_creacion.current.focus();
    },[])

    const handledSubmit = (e)=>{
        e.preventDefault();

    const data = {
        fecha_creacion:fecha_creacion.current.value,
        codigo_externo:codigo_externo.current.value,
        consecutivo_informe:consecutivo_informe.current.value,
        muestreo:muestreo.current.value,
        preparacion_muestra:preparacion_muestra.current.value,
        cantidad:cantidad.current.value,
        tipo_molienda:tipo_molienda.current.value,
        tipo_fermentacion:tipo_fermentacion.current.value,
        densidad_cafe_verde:densidad_cafe_verde.current.value,
        fecha_procesamiento:fecha_procesamiento.current.value,
        tipo_tostion:tipo_tostion.current.value,
        tiempo_fermentacion:tiempo_fermentacion.current.value,
        codigo_muestra:codigo_muestra.current.value,
        actividad_agua:actividad_agua.current.value,
        tiempo_secado:tiempo_secado.current.value,
        presentacion:presentacion.current.value,
        estado:estado.current.value,
        cafes_id:cafes_id.current.value,
    };
    api.post("/registrar",data,{}).finally(()=>{
        navigate("/ListarMuestra")
    })
    }

    return (
        <div className=" bg-gray-800">
            <form onSubmit={handledSubmit} method="post">
                <h1 className="text-center font-bold underline text-3x1 p-3 m-2">Registrar Muesra</h1>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="fecha_creacion" id="fecha_creacion" name="fecha_creacion" ref={fecha_creacion} placeholder="" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="codigo_externo" id="codigo_externo" name="codigo_externo" ref={codigo_externo} placeholder="codigo externo" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="consecutivo_informe" id="consecutivo_informe" name="consecutivo_informe" ref={consecutivo_informe} placeholder="consecutivo_informe" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="muestreo" id="muestreo" name="muestreo" ref={muestreo} placeholder="muestreo" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="preparacion_muestra" id="preparacion_muestra" name="preparacion_muestra" ref={preparacion_muestra} placeholder="preparacion_muestra" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="cantidad" id="cantidad" name="cantidad" ref={cantidad} placeholder="cantidad" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="tipo_molienda" id="tipo_molienda" name="tipo_molienda" ref={tipo_molienda} placeholder="tipo_molienda" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="tipo_fermentacion" id="tipo_fermentacion" name="tipo_fermentacion" ref={tipo_fermentacion} placeholder="tipo_fermentacion" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="densidad_cafe_verde" id="densidad_cafe_verde" name="densidad_cafe_verde" ref={densidad_cafe_verde} placeholder="densidad_cafe_verde" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="fecha_procesamiento" id="fecha_procesamiento" name="fecha_procesamiento" ref={fecha_procesamiento} placeholder="fecha_procesamiento" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="tipo_tostion" id="tipo_tostion" name="tipo_tostion" ref={tipo_tostion} placeholder="tipo_tostion" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="tiempo_fermentacion" id="tiempo_fermentacion" name="tiempo_fermentacion" ref={tiempo_fermentacion} placeholder="tiempo_fermentacion" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="codigo_muestra" id="codigo_muestra" name="codigo_muestra" ref={codigo_muestra} placeholder="codigo_muestra" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="actividad_agua" id="actividad_agua" name="actividad_agua" ref={actividad_agua} placeholder="actividad_agua" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="tiempo_secado" id="tiempo_secado" name="tiempo_secado" ref={tiempo_secado} placeholder="tiempo_secado" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="presentacion" id="presentacion" name="presentacion" ref={presentacion} placeholder="presentacion" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="estado" id="estado" name="estado" ref={estado} placeholder="estado" />
                </div>
                <div className="max-w-xs">
                    <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="cafes_id" id="cafes_id" name="cafes_id" ref={cafes_id} placeholder="cafes_id" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" type="submit">Registrar Muestra</button>
            </form>
        </div>
    )
}
export default RegistrarMuestra