const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let codeName = [];
    for(let member of members) {

      if(typeof member === "string") {
        let arrMember = member.toUpperCase().trim().split("");
        codeName.push(arrMember[0]);
          };

        } 
        return codeName.sort().join("");
        
      } else {

    return false;
  };
};