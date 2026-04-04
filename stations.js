// ==========================================
// 🚇 MTA 线路基础配置 (补充了全线路颜色与 Feed ID)
// ==========================================
const LINE_MAP = {
    "A": { feed: "ace", color: "#0039A6" }, 
    "C": { feed: "ace", color: "#0039A6" }, 
    "E": { feed: "ace", color: "#0039A6" },
    "B": { feed: "bdfm", color: "#FF6319" }, 
    "D": { feed: "bdfm", color: "#FF6319" }, 
    "F": { feed: "bdfm", color: "#FF6319" }, 
    "M": { feed: "bdfm", color: "#FF6319" },
    "N": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "Q": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "R": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "W": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "1": { feed: "1234567", color: "#EE352E" }, 
    "2": { feed: "1234567", color: "#EE352E" }, 
    "3": { feed: "1234567", color: "#EE352E" }, 
    "4": { feed: "1234567", color: "#00933C" }, 
    "5": { feed: "1234567", color: "#00933C" }, 
    "6": { feed: "1234567", color: "#00933C" }, 
    "7": { feed: "1234567", color: "#B933AD" },
    "L": { feed: "l", color: "#A7A9AC" }, 
    "G": { feed: "g", color: "#6CBE45" }, 
    "J": { feed: "jz", color: "#996633" }, 
    "Z": { feed: "jz", color: "#996633" }
};

// ==========================================
// 📍 MTA 车站物理字典 (扩充了骨架数据)
// ==========================================
const STATION_DICT = {
    "1": [ 
        { id: "120", name: "Times Sq-42 St", borough: "Manhattan" }, 
        { id: "127", name: "34 St-Penn Station", borough: "Manhattan" },
        { id: "132", name: "14 St", borough: "Manhattan" } 
    ],
    "7": [
        { id: "701", name: "Flushing-Main St", borough: "Queens" },
        { id: "712", name: "74 St-Broadway", borough: "Queens" },
        { id: "725", name: "Times Sq-42 St", borough: "Manhattan" },
        { id: "726", name: "34 St-Hudson Yards", borough: "Manhattan" }
    ],
    "A": [ 
        { id: "A09", name: "59 St-Columbus Circle", borough: "Manhattan" }, 
        { id: "A12", name: "W 4 St-Wash Sq", borough: "Manhattan" }, 
        { id: "A24", name: "Fulton St", borough: "Manhattan" } 
    ],
    "N": [
        { id: "N02", name: "Astoria-Ditmars Blvd", borough: "Queens" },
        { id: "R16", name: "Times Sq-42 St", borough: "Manhattan" },
        { id: "R23", name: "Canal St", borough: "Manhattan" },
        { id: "R31", name: "Atlantic Av-Barclays Ctr", borough: "Brooklyn" },
        { id: "D43", name: "Coney Island-Stillwell Av", borough: "Brooklyn" }
    ],
    "R": [
        { id: "G08", name: "Forest Hills-71 Av", borough: "Queens" },
        { id: "R16", name: "Times Sq-42 St", borough: "Manhattan" },
        { id: "R31", name: "Atlantic Av-Barclays Ctr", borough: "Brooklyn" },
        { id: "R45", name: "Bay Ridge-95 St", borough: "Brooklyn" }
    ],
    "L": [
        { id: "L01", name: "8 Av", borough: "Manhattan" },
        { id: "L02", name: "6 Av", borough: "Manhattan" },
        { id: "L03", name: "14 St-Union Sq", borough: "Manhattan" },
        { id: "L08", name: "Bedford Av", borough: "Brooklyn" },
        { id: "L29", name: "Canarsie-Rockaway Pkwy", borough: "Brooklyn" }
    ]
};
