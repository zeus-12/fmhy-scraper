// import links-only.json file
import links from '../links-only.json';
import * as fs from 'fs';


// loop through the links array and modify the link property to json.stringify


let newLinks = links.map((link,i) => {
//    changes to match db format
    return link;
});

// write the new links array to a new file 
fs.writeFileSync('./links-only-stringified.json', JSON.stringify(newLinks));