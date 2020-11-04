const excelToJson = require('convert-excel-to-json');

export const workActivities = async (req, res) => {
    try{
        const result = excelToJson({
            sourceFile: './Dataset/Work Activities.xlsx',                                   //imports source data
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        });
        var sol = result["Work Activities"].filter(x=>x.Title == req.params.jobrole)        //Filters file according to input jobRole querry
        console.log(__filename,sol.length);                                                 //logs number of occurences
        return sol;
        }
        catch(e){
        res.status(400).send(e);
    }
    
};