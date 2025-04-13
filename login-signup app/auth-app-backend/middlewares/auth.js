
const jwt = require('jsonwebtoken');
const ensureAuthentication =  (req, res, next)=>{
    const auth = req.headers['authorization'];

    if(!auth){
       return  res.status(403).json({message: "Unauthorized, JWT token is required"});
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({message: "Unauthorized.JWT token is wrong or expired", error});
    }

}

module.exports = ensureAuthentication;






// ------------------------------chat gpt code ----------------------------------------------


// const jwt = require('jsonwebtoken');

// const ensureAuthentication = (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: "Unauthorized, JWT token is required" });
//     }

//     const token = authHeader.split(' ')[1]; // Extract the token part

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: "Unauthorized. JWT token is wrong or expired", error: error.message });
//     }
// };

// module.exports = ensureAuthentication;
