


export interface Response {
    status?: boolean;
    message?: string;
    data?: any;
}

/**
 * 
 * @param data 
 * @returns 
 */
export const response = async (data: Response = { status: true, message: 'Success', data: {}}) => {
    const response = new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
    return response;
}