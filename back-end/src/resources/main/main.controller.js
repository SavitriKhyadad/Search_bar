import { abilities } from '../abilities/abilities.controller.js';
import { interests } from '../interests/interests.controller.js';
import { jobZones } from '../job-zones/jobzones.controller.js';
import { knowledge } from '../knowledge/knowledge.controller.js';
import { technologySkills } from '../technology-skills/technologyskills.controller.js';
import { workActivities } from '../work-activities/workactivities.controller.js';
import { workContext } from '../work-context/workcontext.controller.js';
import { workStyles } from '../work-styles/workstyles.controller.js';
import { workValues } from '../work-values/workvalues.controller.js';
import { occupationData } from '../occupation-data/occupationdata.controller.js';
import { taskStatements } from '../task-statements/taskstatements.controller.js';
import { skills } from '../skills/skills.controller.js';
const fs = require('fs');                                                                                       //file stream

export const main = async (req, res) => {
    try{
        console.log("MAIN");
        var a_obj, b_obj, c_obj, d_obj, e_obj, f_obj, g_obj, h_obj, i_obj, j_obj, k_obj, l_obj;
        a_obj = await taskStatements(req,res);                                                                  // function call for tasks statements
        b_obj = await technologySkills(req,res);                                                                // function call for technology skills             
        c_obj = await knowledge(req,res);                                                                       // function call for knowledge    
        d_obj = await skills(req,res);                                                                          // function call for skills 
        e_obj = await abilities(req,res);                                                                       // function call for abilities     
        f_obj = await workActivities(req,res);                                                                  // function call for work activities         
        g_obj = await workContext(req,res);                                                                     // function call for work context     
        h_obj = await jobZones(req,res);                                                                        // function call for job zones     
        i_obj = await interests(req,res);                                                                       // function call for interests     
        j_obj = await workStyles(req,res);                                                                      // function call for work styles     
        k_obj = await workValues(req,res);                                                                      // function call for work values     
        l_obj = await occupationData(req,res);                                                                  // function call for occupation data         
        
        var output = [{"TASK STATEMENTS":a_obj, "TECHNOLOGY SKILLS":b_obj, "KNOWLEDGE":c_obj, "SKILLS":d_obj, "ABILITIES":e_obj, "WORK ACTIVITIES":f_obj, "WORK CONTEXT":g_obj, "JOB ZONES":h_obj, "INTERESTS":i_obj, "WORK STYLES":j_obj, "WORK VALUES": k_obj, "OCCUPATION DATA":l_obj }];
        let data = JSON.stringify(output);
        fs.writeFile(req.params.jobrole+'.json', data, (err) => {                                               //write output to json file
            if (err) throw err;
            console.log('Data written to file');
        });
        // Send json data to REST client
        //res.send({"OCCUPATION DATA":l_obj  }) // only for occupation data
        res.send({"TASK STATEMENTS":a_obj, "TECHNOLOGY SKILLS":b_obj, "KNOWLEDGE":c_obj,  "SKILLS":d_obj, "ABILITIES":e_obj, "WORK ACTIVITIES":f_obj, "WORK CONTEXT":g_obj, "JOB ZONES":h_obj, "INTERESTS":i_obj, "WORK STYLES":j_obj, "WORK VALUES": k_obj, "OCCUPATION DATA":l_obj  })
    }catch(e){
        console.log("Error in catch", e);
        res.status(400).send(e);
    }    
};

//res.send({"ABILITIES":a_obj, "INTERESTS":b_obj, "JOB ZONES":c_obj, "KMOWLEDGE":d_obj, "OCCUPATION DATA":e_obj, "TASK STATEMENTS":f_obj, "TECHNOLOGY SKILLS":g_obj, "WORK ACTIVITIES":h_obj, "WORK CONTEXT":i_obj, "WORK STYLES":j_obj, "WORK VALUES": k_obj })