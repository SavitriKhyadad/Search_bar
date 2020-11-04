const excelToJson = require('convert-excel-to-json');

export const skills = async (req, res) => {
    try {
        let result = excelToJson({
            sourceFile: './Dataset/Skills.xlsx',                                    //imports source data
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        });
        let sol = result["Skills"].filter(x => x.Title == req.params.jobrole)       //Filters file according to input jobRole querry
        let references = excelToJson({
            sourceFile: './Dataset/Skills to Work Activities.xlsx',                 //imports interlinked file
            columnToKey: {
                '*': '{{columnHeader}}'
            }

        });
        console.log(__filename, sol.length);                                        //logs number of occurences
        let ref_sol = [];
        for (var i = 0; i < sol.length; i++) {
            ref_sol[i] = references["Skills to Work Activities"].filter(x => x["Skills Element Name"] == sol[i]["Element Name"]);   //Filters interlinkedfile according to secondary jobRole subquerry
            // console.log(__filename, { rv, sol });
        }
        return { ...sol, ...ref_sol};
    }
    catch (e) {
        res.status(400).send(e);
    }

};