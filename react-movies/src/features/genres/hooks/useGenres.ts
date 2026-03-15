import { useState, useEffect, useCallback } from "react";
import apiClient from "../../../api/apiClient";
import type Genre from "../models/Genre.model";

export default function useGenres() {
    const [genres, setGenres] = useState<Genre[]>();
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0)
    const [loading, setLoading] = useState(true);

    const loadRecords = useCallback(() => {
        apiClient.get(`/genres`, {
            params: { page, recordsPerPage }
        }).then(res => { 

            const totalAMountOfRecords = parseInt(res.headers['all-records'], 10);
            setTotalAmountOfRecords(totalAMountOfRecords); 

            setGenres(res.data);
            setLoading(false);
        });
    }, [page, recordsPerPage]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        loadRecords();
    }, [loadRecords]);

    return { loading, page, recordsPerPage, totalAmountOfRecords, setPage, setRecordsPerPage, genres, loadRecords }
}