const filtration = (payload, key, value) => {    
    let filtered = [];
    if(typeof value !== "object" ){
        payload.forEach(item => {
            if ( item[key] && item[key] === value ) {
                filtered.push(item);
            }})
    } else { 
        value.forEach(values => {
            payload.forEach(item => {
                if ( item[key] && item[key] === values ) {
                    filtered.push(item);
                }}                
            
    )})}
    return filtered 
    }

export default filtration;