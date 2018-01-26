import axios from 'axios';

export const DashboardService = {
    getDashboardData,
};
const HEADER = {headers: { Authorization: "Bearer " + localStorage.getItem('id_token') }}

/**
 * Get Dashboard data
 * @param {rest_id} param 
 */
function getDashboardData(param)
{
    var url ="http://api.mysite.local:8000/get_data_dashboard";
    return axios.post(url, param, HEADER) // return here
      .then(response => response.data)
      .catch(error => error)
}