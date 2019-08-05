module.exports = (sequelize, type) => {
  return sequelize.define('profile', {
    name: {
      type: type.STRING,
      allowNull: false,
    },
    birthDate: {
      type: type.DATE,
      allowNull: false,
    },
    address: {
      type: type.STRING,
      allowNull: true,
    },
    gender: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  });
};
