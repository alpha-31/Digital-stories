const errorHandler = (err, req, res, next) => {
    // log the error
    console.error(err);

    // format the error
    const error = {
        message: err.message,
        stack: err.stack,
    };

    // send the error to the client
    res.status(err.status || 500).json(error);
};

module.exports = errorHandler;
