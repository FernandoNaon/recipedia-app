//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Diet } = require("./src/db.js");

const typeOfDiets = [
  "gluten free",
  "ketogenic",
  "lacto vegetarian",
  "lacto ovo vegetarian",
  "ovo vegetarian",
  "paleolithic",
  "pescetarian",
  "primal",
  "vegan",
  "vegetarian",
  "whole 30",
  "dairy free",
  "fodmap friendly",
  "whole",
];

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  // typeOfDiets.forEach((e) => {
  //   let el = e;
  //   Diet.findOrCreate({
  //     where: { name: el },
  //     defaults: {
  //       name: el,
  //     },
  //   });
  // });

  typeOfDiets.map((diet) => {
    Diet.create({
      name: diet,
    });
  });

  server.listen(3001, () => {
    console.log("%s listening at 3001 - Diets loaded"); // eslint-disable-line no-console
  });
});
