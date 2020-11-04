import { occupationData } from '../occupation-data/occupation.controller.js';
//const fs = require('fs');                                                                                       //file stream

export const main1 = async (req, res) => {
    try{
        console.log("MAIN1");
        var l_obj ;                                                                   // function call for work values     
        l_obj = await occupationData(req,res);                                                                  // function call for occupation data         
        
        // var output = [{"OCCUPATION DATA":l_obj }];
        // let data = JSON.stringify(output);
        // fs.writeFile('jobroles.json', data, (err) => {                                               //write output to json file
        //     if (err) throw err;
        //     console.log('Data written to file');
        // });
        //Send json data to REST client
        res.send({"JOBROLES":l_obj  })
    }catch(e){
        console.log("Error in catch", e);
        res.status(400).send(e);
    }    
};

//res.send({"ABILITIES":a_obj, "INTERESTS":b_obj, "JOB ZONES":c_obj, "KMOWLEDGE":d_obj, "OCCUPATION DATA":e_obj, "TASK STATEMENTS":f_obj, "TECHNOLOGY SKILLS":g_obj, "WORK ACTIVITIES":h_obj, "WORK CONTEXT":i_obj, "WORK STYLES":j_obj, "WORK VALUES": k_obj })