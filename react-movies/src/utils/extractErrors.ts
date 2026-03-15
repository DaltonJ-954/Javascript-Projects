import type { AxiosError } from "axios";

export default function extractErrors(obj: AxiosError): string[] {
    const data = obj.response?.data as ErrorResponse;
    const err = data.errors;
    let messagesWithErrors: string[] = [];

    for (const field in err) {
        const messagesWithFields = err[field].map(message => `${field}: ${message}`);
        messagesWithErrors = [...messagesWithErrors, ...messagesWithFields];
    }

    return messagesWithErrors;
    
}

interface ErrorResponse {
    errors: {
        [field: string]: string[]
    }
}