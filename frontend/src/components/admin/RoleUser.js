const getRole = () => {
    const role = localStorage.getItem('role');

    // Check if the role is null and return false, otherwise convert to boolean
    return role === null ? false : role === 'true'; // Convert string 'true' to boolean true
};

const setRole = (rol) => {
    // Check if rol is not a boolean
    if (typeof rol !== 'boolean') {
        console.error('Role must be a boolean value.'); // Log an error
        return; // Exit the function
    }

    localStorage.setItem('role', rol);
    console.log(typeof rol);
};


export { getRole, setRole };
