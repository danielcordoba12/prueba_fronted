import React, { useEffect,useState } from "react";
import Api from "../components/api";
import { Link } from "react-router-dom";

const ListarMuestra = () => {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await Api.get('/listar');
                setTasks(response.data);
                console.log(response.data)
            }catch (error) {
                console.error('Error fetching tasks',error) 
            }
        };
        fetchTasks();
    },[]);
    return (
        <div className="h-screen py-20 bg-gray-800 ">
            <h1 className="text-center font-bold  text-6xl">Muestras</h1>
            <div className="flex text-center items-center justify-center font-bold text-xl mt-10">
                {/* {tasks.map((task) => (
                <div className="border-y-1 focus:bg-slate-300 " key={task.id}>
                    <td>{task.propietario}</td>
                    <td>{task.finca}</td>
                    <td>{task.lote}</td>
                    <td>{task.cantidad}</td>
                    <td>{task.fecha_creacion}</td> */}
                    <table className="border">
            <thead>
            <tr>
                <th className="border">fecha</th>
                <th className="border">codigo</th>
                <th className="border">Informe</th>
                <th className="border">muestreo</th>
                <th className="border">preparacion</th>
                <th className="border">cantidad</th>
                <th className="border">molienda</th>
                <th className="border">fermentacion</th>
                <th className="border">densidad</th>
                <th className="border">procesamiento</th>
                <th className="border">tostion</th>
                <th className="border">muestra</th>
                <th className="border">Agua</th>
                <th className="border">secado</th>
                <th className="border">presentacion</th>
                <th className="border">estado</th>
                <th className="border">cafes_id</th>
                <th className="border">Actualizar</th>

            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                <td className="border">{task.fecha_creacion}</td>
                <td className="border">{task.codigo_externo}</td>
                <td className="border">{task.consecutivo_informe}</td>
                <td className="border">{task.muestreo}</td>
                <td className="border">{task.preparacion_muestra}</td>
                <td className="border">{task.cantidad}</td>
                <td className="border">{task.tipo_molienda}</td>
                <td className="border">{task.tipo_fermentacion}</td>
                <td className="border">{task.densidad_cafe_verde}</td>
                <td className="border">{task.fecha_procesamiento}</td>
                <td className="border">{task.tipo_tostion}</td>
                <td className="border">{task.codigo_muestra}</td>
                <td className="border">{task.actividad_agua}</td>
                <td className="border">{task.tiempo_secado}</td>
                <td className="border">{task.presentacion}</td>
                <td className="border">{task.estado}</td>
                <td className="border">{task.cafes_id}</td>

                <td className="border"><Link to={`/EditarMuestra/${task.id}`}>{task.id}</Link></td>
                </tr>
            ))}
            
            </tbody>
                
        </table>
    </div>
                {/* <Link to={`/EditarUsuario/${task.id}`}>{task.name}</Link> */}
            {/* </div> */}
            {/* ))} */}
        </div>
    )
}
 export default ListarMuestra