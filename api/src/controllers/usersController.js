const { User } = require("../db");

async function createUser(req, res, next) {
    const { userName, email, password, isAdmin } = req.body;
    const passAdmin = 'henry';
    try {
        const userNameExist = await User.findOne({
            where: { userName },
        })
        if (userNameExist) {
            return res.json({ message: 'nombre de usuario ya existente' });
        }
        const emailExist = await User.findOne({
            where: { email },
        });
        if (emailExist) {
            return res.json({ message: 'mail ya existente' });
        }
        if (isAdmin) {
            if (isAdmin === passAdmin) {
                const newUser = await User.create({
                    userName,
                    email,
                    password,
                    isAdmin: true
                });
                return res.json({ message: 'administrador creado' });
            } else {
                return res.json({ message: 'clave de administrador invalida' });
            }
        } else {
            const newUser = await User.create({
                userName,
                email,
                password,
                isAdmin: false
            });
            return res.json({ message: 'usuario creado' })
        }
    } catch (error) {
        next(error);
    }
}

async function getUsers(req, res, next) {
    try {
        const users = await User.findAll();
        const arrUsers = [];
        if (users.length) {
            for (element of users) {
                const values = element.dataValues;
                const objUser = {
                    id: values.id,
                    userName: values.userName,
                    email: values.email,
                    password: values.password,
                    isAdmin: values.isAdmin,
                };
                arrUsers.push(objUser);
            }
        } else {
            return res.send("base de datos vacia");
        }
        res.json(arrUsers);
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    const { id, userName, email, password, isAdmin } = req.body;
    const passAdmin = 'henry'
    try {
        const toEditUser = await User.findOne({
            where: {
                id,
            },
        });
        if (toEditUser) {
            const userNameExist = await User.findOne({
                where: { userName },
            })
            if (userNameExist) {
                return res.json({ message: 'nombre de usuario ya existente' })
            }
            const emailExist = await User.findOne({
                where: { email },
            })
            if (emailExist) {
                return res.json({ message: 'mail ya existente' })
            }
            if (isAdmin === passAdmin) {
                toEditUser.update(req.body);
                toEditUser.update({
                    isAdmin: true
                });
                return res.status(200).json({message:"Usuario Actualizado"});
            } else {
                if (isAdmin !== passAdmin){
                    return res.status(200).json({message:"Clave de administrador invalida"});
                } else {
                    toEditUser.update(req.body);
                    toEditUser.update({
                        isAdmin: false
                    });
                }
            }
        } else {
            return res.status(400).json({message:"Usuario no encontrado"});
        }
        return res.status(200).json({message:"Usuario Actualizado"});
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createUser,
    getUsers,
    updateUser
}