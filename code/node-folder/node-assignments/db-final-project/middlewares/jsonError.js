const jsonError = ((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400) {
        return res.status(400).send({ error: 'Invalid JSON' });
    }
    next(err); // Pass the error to the next error handler
});
export default jsonError