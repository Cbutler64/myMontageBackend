module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      birthday: DataTypes.STRING,
      sex: DataTypes.STRING,
      password: DataTypes.STRING,
      passCon: DataTypes.STRING
   
    });
   
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
   
    return Author;
   };