import React from 'react';


export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }


    getNews(teamsForNewsString){
        var url = 'https://newsapi.org/v2/everything?' +
        `q="${teamsForNewsString}"&` +
        'from=2018-12-05&' +
        'languege=eg&' +
        'apiKey=508b1fda120441e68b78ef8483883676';

        var req = new Request(url);

        fetch(req)
        .then(function(res) {
            return res.json()
        }).then(data => this.setState({
            articles: data.articles
        })
        )

    }

    componentDidMount(){
        
        fetch('http://localhost:8080/teams')
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            this.setState({
                teams: data.teams,
                id: data.teams[0].id
            })
            console.log(data);
            let teams = data.teams[0].team.toString();
             let teamsForNewsString = teams.replace(/,/g, '" OR "');
            
            console.log(teamsForNewsString);
            this.getNews(teamsForNewsString);
        })
        .catch(error => {
            console.log(error);
        })
        ;
    }



    render() {

        const {articles} = this.state;
        let test = articles.map((article)=>{
            return console.log(article)
        })

       

        return (
            <div className = "articles">

            </div>
        );
    }
}
