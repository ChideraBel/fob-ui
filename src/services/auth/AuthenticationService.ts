import { useEffect, useState } from "react";
import { postFunc } from "../ApiCallService";
import { LOGIN_ENDPOINT } from "../../Constants";
import { ResponseMessage } from "../../models/ResponseMessage";

export const userLogin = (trigger: string, email: string, password: string): [ResponseMessage, boolean, Error] => {
    const [data, setData] = useState<ResponseMessage>(null as unknown as ResponseMessage);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>(null as unknown as Error);

    //TODO: set up api credentials, getting error 403 "forbidden" presently.
    useEffect(() => {
        const callFunction = async () => {
            const endpoint = LOGIN_ENDPOINT;
            setIsLoading(true);

            try {
                setIsLoading(true); // Set isLoading to true when starting to fetch data
                // Call your API function here
                const response = await postFunc(endpoint, { email: email, password: password });
                console.log('Response:', response);
                setData(response as unknown as ResponseMessage);
            } catch (error) {
                setError(error as unknown as Error)
                console.log("error")
            } finally {
                setIsLoading(false);
            }
        }
        
        if (email.length == 0 || password.length == 0) return;
        callFunction();
    }, [trigger]);

    return [data, isLoading, error];
};