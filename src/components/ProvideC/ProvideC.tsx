import React from "react";
type ProvideCProps={
    temp:string
}

class ProvideC extends React.Component<ProvideCProps>{


render(){
    const  {temp}=this.props;
return (
    <div>{temp}</div>
)
}
}
export default ProvideC