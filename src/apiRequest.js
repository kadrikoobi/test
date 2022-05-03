const apiRequest = async (url = '', options = null, errors = null) => {
    let errMsg = null;
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw Error('Reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;