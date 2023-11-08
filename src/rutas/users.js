const router =require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../modelos/user.model')

//POST./users/register
router.post('/register',(req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 12);
        
        const user = await User.create(req.body);
        res.json(user);
    }catch (error){
        res.json({error: error.message});
    }
});
//POST./users/login
router.post('/login', (req, res) =>{
    //Comprobar si el mail existe
    const user = await User.findOne({email: req.body.email});
    if (!user){
        return res.json({ error: 'Error en email/contraseña'});
    }

    const eq = bcrypt.compareSync(req.body.password, user.password);
    if (!eq){
        return res.json({ error: 'Error en email/contraseña'});
    }

    res.json({
        success: 'Login Correcto',
        token: createToken(user)
    });
});
function createToken(user){
    const payload ={
        user_id: user.user_id,
        user_role: user.role
    }
    return jwt.sign(payload, 'en un lugar de la mancha');
}
//router.use('/users',require('./users'));

module.exports=router;