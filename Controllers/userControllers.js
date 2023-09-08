const users = require('../Models/userSchema');

exports.addUser = async (req, res) => {
   console.log(req.file);
   console.log("Inside adduser");

   const { fname, lname, email, mobile, gender, status, location } = req.body;
   try {
      const isUser = await users.findOne({ email });
      if (isUser) {
         res.status(406).json("User already exist!");
      } else {
         const newUser = new users({
            fname,
            lname,
            email,
            mobile,
            gender,
            status,
            profile: req.file.filename,
            location,
         });

         await newUser.save();
         res.status(200).json(newUser);
      }
   } catch (error) {
      res.status(401).json("Error: ", error);
   }
};

exports.getallUsers = async (req, res) => {
   const search = req.query.search
   const query = {
      fname: { $regex: search, $options: "i" }
   }
   try {
      const allUsers = await users.find(query)
      res.status(200).json(allUsers)
   } catch (err) {
      res.status(401).json(err)
   }
}

exports.deleteUser = async (req, res) => {
   const { id } = req.params
   try {
      const removeData = await users.findByIdAndDelete({ _id: id })
      res.status(200).json(removeData)
   } catch (err) {
      res.status(401).json(err)
   }
}

exports.edituser = async (req,res) =>{
   const {id} =  req.params
   const {fname, lname, email, mobile, gender, status, location, profile} = req.body;
   const file = req.file?req.file.filename:profile
   try{
      const updateUser = await users.findByIdAndUpdate({_id:id},{
         fname,
         lname,
         email,
         mobile,
         gender,
         status,
         profile:file,
         location 
      },{new:true})
      await updateUser.save()
      res.status(200).json(updateUser)
   }catch(err){
      res.status(401).json(err)
   }
}