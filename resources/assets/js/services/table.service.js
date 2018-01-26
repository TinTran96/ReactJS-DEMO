import axios from 'axios';

export const TableService = {
    findTableByRestID,
};
const HEADER = {headers: { Authorization: "Bearer " + localStorage.getItem('id_token') }}

function findTableByRestID(param)
{
    var url ="http://api.mysite.local:8000/get_table_by_rest_id";
    return axios.post(url, param, HEADER) // return here
      .then(response => retsponse.data)
      .catch(error => error)
}