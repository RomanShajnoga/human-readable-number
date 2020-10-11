module.exports = function toReadable (number) {
  
    
    let numberReadableStr1= (num)=>{
     if (num==0) return 'zero';
     if (num==1) return 'one';
     if (num==2) return 'two';
     if (num==3) return 'three';
     if (num==4) return 'four';
     if (num==5) return 'five';
     if (num==6) return 'six';
     if (num==7) return 'seven';
     if (num==8) return 'eight';
     if (num==9) return 'nine';
     
    
    }
    let numberReadableStr2= (num)=>{
      
        if (num==10) return 'ten';
        if (num==11) return 'eleven';
        if (num==12) return 'twelve';
        if (num==13) return  'thirteen';
        if (num==15) return  'fifteen';
        if (num==18) return  'eighteen';
         return `${numberReadableStr1(num.split('')[1])}teen`;
        
       }

       let numberReadableStr3= (num)=>{
    
        if (num==2) return 'twenty';
        if (num==3) return 'thirty';
        if (num==4) return 'forty';
        if (num==5) return 'fifty';
        if (num==8) return 'eighty';
         return `${numberReadableStr1(num.split('')[0])}ty`;
        
       }

        
       
  let arr=number.toString().split('');
  switch(arr.length){
      case 0:return; 
      
      case 1: return numberReadableStr1(number);
      case 2:

          if(arr[0]==1) {
              return numberReadableStr2(number.toString());
          }
          if (arr[1]==0){
            return `${numberReadableStr3(arr[0])}`; 
          }
          return `${numberReadableStr3(arr[0])} ${numberReadableStr1(arr[1])}`;
      case 3: 
      if(arr[1]==0) {
          if(arr[2]==0){
            return `${numberReadableStr1(arr[0])} hundred`;
         }
        return `${numberReadableStr1(arr[0])} hundred ${numberReadableStr1(arr[2])}`;
    }
      if(arr[2]!=0){
      return `${numberReadableStr1(arr[0])} hundred ${arr[1]==1 ? numberReadableStr2(`${arr[1]}${arr[2]}`): `${numberReadableStr3(arr[1])} ${numberReadableStr1(arr[2])}`}`;
    } else {
        return `${numberReadableStr1(arr[0])} hundred ${arr[1]==1 ? numberReadableStr2(`${arr[1]}${arr[2]}`): `${numberReadableStr3(arr[1])}`}`;

    }


  }
}
