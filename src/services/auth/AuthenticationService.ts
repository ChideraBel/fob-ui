import { useEffect, useState } from "react";
import { fetchData } from "../ApiCallService";
import { LOGIN_ENDPOINT } from "../../Constants";
import { ResponseMessage } from "../../models/ResponseMessage";

export const userLogin = (trigger: string, username: string, password: string): [ResponseMessage, boolean, Error] => {
    const [data, setData] = useState<ResponseMessage>(null as unknown as ResponseMessage);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>(null as unknown as Error);

    //TODO: set up api credentials, getting error 403 "forbidden" presently.
    useEffect(() => {
        if(username.length == 0 || password.length == 0) return;
        
        const url = LOGIN_ENDPOINT;
        setIsLoading(true);
        fetchData(url)
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null as unknown as Error);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [trigger]);

    return [data, isLoading, error];
};