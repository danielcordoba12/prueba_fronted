import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../components/api';

const EditarMuestra = () =>{
    const {id} = useParams();
    const [muestras,setMuestra]=useState ({fecha_creacion:'',codigo_externo:'',consecutivo_informe:'',muestreo:'',preparacion_muestra:'',cantidad:'',tipo_molienda:'',tipo_fermentacion:'',densidad_cafe_verde:'',fecha_procesamiento:'',tipo_tostion:'',tiempo_fermentacion:'',codigo_muestra:'',actividad_agua:'',tiempo_secado:'',presentacion:'',estado:'',cafes_id:''});
    const navigate = useNavigate();

    useEffect(()=>{

        const buscarMuestra = async () => {
            try {
                const response = await api.get(`/buscar/${id}`);
                setMuestra(response.data[0]);
            }catch(error) {
                console.error("error buscando el usuario:",error);
            }
        };
        buscarMuestra();
    },[id]); 
    const handleEditmuestra = async () => {
        try {
            await api.put(`/actualizar/${id}`, muestras);
            navigate("/ListarMuestra")
        }catch (error){
            console.error('Error editando el usuario:',error)
        }
    }
    return (
        <div className='h-screen  w-screen bg-gray-800' >
            <h1 className="text-center font-bold underline text-3x1 p-3 m-2 ">Editar Muestra</h1>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="fecha_creacion" value={muestras.fecha_creacion}
                    onChange={(e) => setMuestra({ ...muestras, fecha_creacion: e.target.value })} />
            </div>
            
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="codigo_externo" value={muestras.codigo_externo}
                    onChange={(e) => setMuestra({ ...muestras, codigo_externo: e.target.value })} />
            </div>

            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="consecutivo_informe" value={muestras.consecutivo_informe}
                    onChange={(e) => setMuestra({ ...muestras, consecutivo_informe: e.target.value })} />
            </div>

            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="muestreo" value={muestras.muestreo}
                    onChange={(e) => setMuestra({ ...muestras, muestreo: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="preparacion_muestra" value={muestras.preparacion_muestra}
                    onChange={(e) => setMuestra({ ...muestras, preparacion_muestra: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="cantidad" value={muestras.cantidad}
                    onChange={(e) => setMuestra({ ...muestras, cantidad: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="tipo_molienda" value={muestras.tipo_molienda}
                    onChange={(e) => setMuestra({ ...muestras, tipo_molienda: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="tipo_fermentacion" value={muestras.tipo_fermentacion}
                    onChange={(e) => setMuestra({ ...muestras, tipo_fermentacion: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="densidad_cafe_verde" value={muestras.densidad_cafe_verde}
                    onChange={(e) => setMuestra({ ...muestras, densidad_cafe_verde: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="fecha_procesamiento" value={muestras.fecha_procesamiento}
                    onChange={(e) => setMuestra({ ...muestras, fecha_procesamiento: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="tipo_tostion" value={muestras.tipo_tostion}
                    onChange={(e) => setMuestra({ ...muestras, tipo_tostion: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="tiempo_fermentacion" value={muestras.tiempo_fermentacion}
                    onChange={(e) => setMuestra({ ...muestras, tiempo_fermentacion: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="codigo_muestra" value={muestras.codigo_muestra}
                    onChange={(e) => setMuestra({ ...muestras, codigo_muestra: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="actividad_agua" value={muestras.actividad_agua}
                    onChange={(e) => setMuestra({ ...muestras, actividad_agua: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text"  value={muestras.tiempo_secado} placeholder='tiempo_secado'
                    onChange={(e) => setMuestra({ ...muestras, tiempo_secado: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="presentacion" value={muestras.presentacion}
                    onChange={(e) => setMuestra({ ...muestras, presentacion: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="estado" value={muestras.estado}
                    onChange={(e) => setMuestra({ ...muestras, estado: e.target.value })} />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-white leading-tight focus:shadow-outline" type="text" placeholder="cafes_id" value={muestras.cafes_id}
                    onChange={(e) => setMuestra({ ...muestras, cafes_id: e.target.value })} />
            </div>
            
            <button className="bg-blue-500" onClick={handleEditmuestra}>Actulizar usuario </button>
            <button className="bg-red-500" onClick={handleEditmuestra}>Eliminar usuario </button>
        </div>
        
    )
}

export default EditarMuestra