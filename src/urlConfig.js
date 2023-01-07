const baseUrl = "https://web-production-eaa1.up.railway.app";
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) =>{
    return `${baseUrl}/public/${fileName}`;
}