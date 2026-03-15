import { useState, useCallback, useEffect } from "react";
import apiClient from "../api/apiClient";

export default function useEntities<T>(url: string) {
    const [entities, setEntities] = useState<T[]>();
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0)
    const [loading, setLoading] = useState(true);

    const loadRecords = useCallback(() => {
        apiClient.get(url, {
            params: { page, recordsPerPage }
        }).then(res => { 

            const totalAMountOfRecords = parseInt(res.headers['all-records'], 10);
            setTotalAmountOfRecords(totalAMountOfRecords); 

            setEntities(res.data);
            setLoading(false);
        });
    }, [page, recordsPerPage, url]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        loadRecords();
    }, [loadRecords]);

    return { loading, page, recordsPerPage, totalAmountOfRecords, 
        setPage, setRecordsPerPage, entities, loadRecords }
}