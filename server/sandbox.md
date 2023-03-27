npx sequelize-cli model:generate --name Monster --attributes english_name:string,japan_name:string,title:array,class:string,generation:string,form:enum,threat_level:integer

npx sequelize-cli model:generate --name Monster_Detail --attributes elements:array,ailemnts:array,weakness:array,habitats:array,size:array,cousins:array

npx sequelize-cli model:generate --name Monster_Explanation --attributes monster_id:integer,physiology:string,abilities:string,behavior:string,habitat:string,description:string

npx sequelize-cli model:generate --name Class_Monster --attributes class:string

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:enum,

npx sequelize-cli model:generate --name Profile --attributes fullname:string,birthdate:DATEONLY,region:string,user_id:integer
