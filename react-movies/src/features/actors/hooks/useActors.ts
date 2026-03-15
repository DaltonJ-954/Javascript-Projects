import { useState, useEffect, useCallback } from "react";
import apiClient from "../../../api/apiClient";
import type Actor from "../models/Actor.model";

export default function useActors() {
    const [actors, setActors] = useState<Actor[]>();
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0)
    const [loading, setLoading] = useState(true);

    const loadRecords = useCallback(async () => {
        setLoading(true);
        apiClient.get(`/actors`, {
            params: { page, recordsPerPage }
        }).then(res => { 
            const totalAMountOfRecords = parseInt(res.headers['all-records'], 10);
            setTotalAmountOfRecords(totalAMountOfRecords); 

            setActors(res.data);
            setLoading(false);
        });
    }, [page, recordsPerPage]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        loadRecords();
    }, [loadRecords]);

    return { loading, page, recordsPerPage, totalAmountOfRecords, setPage, setRecordsPerPage, actors, loadRecords }
}