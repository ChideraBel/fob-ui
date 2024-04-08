import { useEffect, useState } from "react";
import { Section, Sections } from "../../models/Section"
import { GET_ALL_SECTIONS } from "../../Constants";
import { getFunc } from "../ApiCallService";

export const getAllSections = (trigger: string): [Section[], boolean, Error] => {
    const [data, setData] = useState<Section[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>(null as unknown as Error);

    useEffect(() => {
        const callFunction = async () => {
            const endpoint = GET_ALL_SECTIONS;
            setIsLoading(true);
            try {
                setIsLoading(true);
                const response = await getFunc(endpoint) as unknown as Sections
                setData(response?.sections as unknown as Section[]);
            } catch (error) {
                setError(error as unknown as Error)
                console.log("error")
            } finally {
                setIsLoading(false);
            }
        }
        
        callFunction();
    }, [trigger]);

    return [data, isLoading, error];
}