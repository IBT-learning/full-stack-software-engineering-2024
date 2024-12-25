function checkBody(req, res, next) { 
    if (!req.body) {
        return res.status(400).send({ error: 'A JSON Request body is required' });
    }
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Request body cannot be empty' });
    }
        
    next()
}
function checkFields(req, res, next) {
    const fields = ["author", "title", "ingredients", "instructions"]
    for (const keys of fields) {
        if (!req.body[keys]) {
            return res.status(400).send({ error: `The ${keys} field is required` });
        }
    };
    next();  
}
function checkBodyUpdate(req, res, next) { 
    if (!req.body.title && !req.body.ingredients && !req.body.instructions && !req.body.author) {
        return res.status(400).send({ error: 'The requested field to update is not a valid'});
    }
    next()
}
export { checkBody, checkBodyUpdate, checkFields}