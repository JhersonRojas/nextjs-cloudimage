// Función para configurar Fetch
function createFetch(baseURL, defaultHeaders) {
    return async ({ url, method = "GET", body = null, options = {}}) => {
        // Combinar la URL base y la URL de la petición

        if (!baseURL)
            throw new Error("Base URL not specified")

        url = new URL(url, baseURL).toString();

        if (options.next) options.next.revalidate = revalidate

        // Combinar los encabezados predeterminados y los encabezados de la petición
        options.headers = {
            ...defaultHeaders,
            ...(options.headers || {})
        };

        // Añadir el método a las opciones
        options.method = method;

        // Añadir el cuerpo a las opciones, si se proporciona
        if (body !== null) options.body = JSON.stringify(body);

        // Realizar la petición con Fetch
        const response = await fetch(url, options);

        // Devolver la respuesta
        return response;
    };
}

// Instancia de Fetch con una configuración predeterminada
export const Fetching = createFetch("http://localhost:3000", {
    "Content-Type": "application/json"
});
