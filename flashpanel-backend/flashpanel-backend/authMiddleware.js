module.exports = (req, res, next) => {
    const key = req.headers["flash-key"];

    if (!key || key !== "flashpanel_secret_123") {
        return res.status(403).json({ message: "Unauthorized request" });
    }

    next();
};

