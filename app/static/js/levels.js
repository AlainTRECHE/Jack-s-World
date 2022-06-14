const levels = {
    lvl1 : {
        name : "retrouve le cadeau vole par oogie boogie !",
        lvlSize : [6,4],
        targetCell : [5,3],
        cellType : 1,
    },
    lvl2 : {
        name : "En avant !",
        lvlSize : [10,6],
        targetCell : [6,2],
        cellType : 2,
    },
    lvl3 : {
        name : "ramasse tous les cadeaux",
        lvlSize : [10,6],
        targetCell : [Math.floor(Math.random()*3),Math.floor(Math.random()*6)],
        cellType : 4,
    },
    lvl4 : {
        name : "Oogie boogie a cache le cadeau !",
        lvlSize : [7,6],
        targetCell : [Math.floor(Math.random()*3),Math.floor(Math.random()*6)],
        cellType : 6,
        hiddenTreasure : true,
    },
    lvl5 : {
        name : "La lave en fusion !",
        lvlSize : [14,3],
        targetCell : [Math.floor(Math.random()*3),Math.floor(Math.random()*3)],
        cellType : 3,
        hiddenTreasure : true,
    },
    lvl6 : {
        name : "Il t'en reste un dernier a trouver !",
        lvlSize : [14,6],
        targetCell : [Math.floor(Math.random()*3),Math.floor(Math.random()*6)],
        cellType : 7,
        hiddenTreasure : true,
    },

};