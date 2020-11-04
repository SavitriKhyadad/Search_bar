const excelToJson = require('convert-excel-to-json');

export const jobZones = async (req, res) => {
    try {
        let result = excelToJson({
            sourceFile: './Dataset/Job Zones.xlsx',                                                                 //imports source data
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        });
        let sol = result["Job Zones"].filter(x => x.Title == req.params.jobrole)                                    //Filters file according to input jobRole querry
        if (sol.length == 1) {
            let references = excelToJson({
                sourceFile: './Dataset/Job Zone Reference.xlsx',                                                    //imports interlinked file
                columnToKey: {
                    '*': '{{columnHeader}}'
                }

            });
              console.log(__filename,sol.length);                                                                   //logs number of occurences
            let ref_sol = references["Job Zone Reference"].filter(x => x["Job Zone"] == sol[0]["Job Zone"]);        //Filters interlinkedfile according to secondary jobrole subquerry
            if (ref_sol.length == 1) {
                // console.log(__filename, { rv, sol });
                return { ...sol[0], ...ref_sol[0] };
            }
            return { "error": "not found" }
        }
        return { "error": "not found" }
    }
    catch (e) {
        res.status(400).send(e);
    }

};