import React from "react"

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox
} from "@material-ui/core"

class ToDo extends React.Component{
    constructor(props){
        super(props)
        //props는 수정이 안되서 state로 변환
        this.state = {item:this.props.item}
    }

    render(){
        //자주 사용하는 데이터를 짧게 사용하기 위해서 다른 변수에 대입
        const item = this.state.item;
        return(
           <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label":"naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
           </ListItem>
        )
    }

}

export default ToDo;