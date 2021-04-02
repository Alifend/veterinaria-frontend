import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class MascotaService {
  
  getMascotas(id){
    return axios.get(API_URL + 'propietario/'+id+'/mascota/', {headers:authHeader()});
  }

  deleteMascota(id){
    return axios.delete(API_URL+ 'mascota/'+id, {headers:authHeader()});
  }

  createMascota(mascota){
    return axios.post(API_URL+ 'mascota/',mascota ,{headers:authHeader()});
  }

  editarMascota( mascota ){
    return axios.put(API_URL+ 'mascota/'+mascota.id+'/',mascota,{headers:authHeader()});
  }
}
export default new MascotaService();