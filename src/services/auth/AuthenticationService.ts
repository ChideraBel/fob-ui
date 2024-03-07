import { useEffect, useState } from "react";
import { postFunc } from "../ApiCallService";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../Constants";
import { ResponseMessage } from "../../models/ResponseMessage";
import { SignupRequest } from "../../models/SignupRequest";

export const userLogin = (trigger: string, email: string, password: string): [ResponseMessage, boolean, Error] => {
    const [data, setData] = useState<ResponseMessage>(null as unknown as ResponseMessage);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>(null as unknown as Error);

    useEffect(() => {
        const callFunction = async () => {
            const endpoint = LOGIN_ENDPOINT;
            setIsLoading(true);
            try {
                setIsLoading(true);
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

export const userSignUp = (trigger: string, payload: SignupRequest): [ResponseMessage, boolean, Error] => {
    const [data, setData] = useState<ResponseMessage>(null as unknown as ResponseMessage);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>(null as unknown as Error);

    useEffect(() => {
        const callFunction = async () => {
            const endpoint = SIGNUP_ENDPOINT;
            setLoading(true);
            try {
                setLoading(true);
                const response = await postFunc(endpoint, payload);
                console.log('Response: ', response);
                setData(response as unknown as ResponseMessage);
            } catch (error) {
                setError(error as unknown as Error)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (payload == null) return;
        callFunction();
    }, [trigger]);

    return [data, isLoading, error];
}