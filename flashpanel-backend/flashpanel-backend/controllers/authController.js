exports.login = (req, res) => {
    const { username, password } = req.body;

    // Basic dummy user (later you can replace with DB)
    if (username === "admin" && password === "admin123") {
        return res.json({
            message: "Login successful",
            user: username
        });
    }

    return res.status(401).json({ message: "Invalid username or password" });
};
