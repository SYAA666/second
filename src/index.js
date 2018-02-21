/** 
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  var i = 0; var count=0; var pedor1; var pedor2;var pedor3;
  for(i=0;i<preferences.length;i++)
  {
   
   if(preferences[i] == i+1) continue;
    pedor1 = preferences[i];
    pedor2 = preferences[pedor1-1];
    pedor3 = preferences[pedor2-1];
    if(pedor3-1 == i) {    
    count++;
    if(i == pedor1-2 && i == pedor2 - 3 ) i=i+2;
    if(i+3>preferences.length) break;
    preferences[i] = -1;
    }
  }
  return count;
};