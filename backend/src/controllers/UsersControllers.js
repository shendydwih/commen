import Users from "../models/UsersModels.js"

export const create = async (req, res) => {
    try  {
        const newUsers = new Users(req.body);
        const {email} = newUsers;

        const usersExist = await Users.findOne({email});
        if(usersExist) {
            return res.status(400).json({message: "User already exists"})
        }
        const saveData = await newUsers.save();
        res.status(201).json(saveData);
    }catch(err) {
        res.status(500).json({errorMessage: error.message})
    }
}