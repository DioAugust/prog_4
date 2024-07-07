// middleware that is specific to this router
const logRegister = function () {
  return function (req, res, next) {
    console.log({
      "Request type: ": req.method,
      "Request URL:": req.originalUrl,
      "Request params:": req.params,
    });
    next();
  };
};

module.exports = logRegister;
