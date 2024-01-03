// InsertTimeEntry.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const InsertTimeEntry = () => {
    const [token, setToken] = useState(''); 
    const [insert, setInsert] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            try {
                const url = 'https://testapp.sophossolutions.com/SophosApiChronus/api/Token';
                const credentials = {
                    user: "UserSophosChronus.Api",
                    password: "Sophos.2020*#"
                };
                const { data } = await axios.post(url, credentials);
                setToken(data.token);
            } catch (error) {
                console.error("Error al obtener el token:", error);
                setLoading(false); 
            }
        };

        const postInsert = async () => {
            try {
                const urlInsert = 'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/InsertTimeEntry';
                const headers = {
                    'Content-Type': 'application/json-patch+json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}` 
                };

                
                const body = {
                    "data": {
                        "idTable": 0,
                        "message": "string"
                    },
                    "meta": {
                        "totalCount": 0,
                        "pageSize": 0,
                        "currentPage": 0,
                        "totalPages": 0,
                        "hasNextPage": true,
                        "hasPreviusPage": true,
                        "nextPageUrl": "string",
                        "previusPageUrl": "string"
                    }
                };

                const response = await axios.post(urlInsert, body, { headers });
                setInsert(response.data);
            } catch (error) {
                console.error("Error al insertar:", error); 
            } finally {
                setLoading(false); 
            }
        };

        getToken();
        postInsert();
    }, [token]); 

    return (
        <div>
            {loading ? <p>Cargando...</p> : <p>Datos insertados: {JSON.stringify(insert)}</p>}
        </div>
    );
};

export default InsertTimeEntry;
