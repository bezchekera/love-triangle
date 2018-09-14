
module.exports = function getLoveTrianglesCount(preferences = []) {
 count=0;
  for(var i=0; i<preferences.length; i++) {
    
    ko1=preferences[i]-1; 
    ko2=preferences[ko1]-1;
 
    if (i==preferences[ko2]-1 && preferences[i] != 0 && preferences[ko1] != 0 && preferences[ko2] != 0 && ko1!=ko2) {
        count++;
             preferences[i]=0;
             preferences[ko1]=0;
             preferences[ko2]=0;}
       }     
                
     return count;
  
};
