import { CONST_BASE_URL } from "@/constants/private";

const secret = CONST_BASE_URL()

// Función para configurar Fetch
function createFetch(baseURL, defaultHeaders) {
    return async ({ url, method = "GET", body = null, options = {}, type = "json" }) => {
        // Combinar la URL base y la URL de la petición

        if (!baseURL)
            throw new Error("Base URL not specified")

        url = new URL(url, baseURL).toString();

        if (options.next) options.next.revalidate = revalidate

        // Añadir el método a las opciones
        options.method = method;

        if (type == "json") {
            // Combinar los encabezados predeterminados y los encabezados de la petición
            options.headers = {
                ...defaultHeaders,
                ...(options.headers || {})
            };

            // Añadir el cuerpo a las opciones, si se proporciona
            if (body !== null) options.body = JSON.stringify(body);
        } else {
            // Combinar los encabezados predeterminados y los encabezados de la petición
            options.headers = {
                ...(options.headers || {})
            };

            // Añadir el cuerpo a las opciones, si se proporciona
            if (body !== null) options.body = body
        }

        // Realizar la petición con Fetch
        const response = await fetch(url, options);

        // Devolver la respuesta
        return response;
    };
}

// Instancia de Fetch con una configuración predeterminada
export const Fetching = createFetch(secret, {
    "Content-Type": "application/json"
});
