import React from 'react';
import Delete from './delete.png';
import teamList from './teamList';

export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }

    
    
    
    
    

    render() {
        let teamString = this.props.team.toString();
        console.log(this.props.team)
        
        let test = this.props.team;
        console.log(test);
        let test2 = test.map((team, index) => {
            console.log(teamList.NBA.team || teamList.MLB.team || teamList.NFL.team === team)
           return <li key={index} className={"teams"}>{team} 
           
           <img src={Delete} className = "deleteIcon" onClick={(e) => this.click(e)}></img> </li>
            
                             
        });
        console.log(test2);
        

        return (
            <>
                
                {test2}
                        

            </>
        );
    }
}

Teams.defaultProps = {
    team: ''
};