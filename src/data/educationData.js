import axios from 'axios';
import server from './configs/server.json'

export var educationData = [
    {
        id: 1,
        institution: 'PaukTaw Middle School',
        course: 'Middle Primary Education',
        startYear: '2005',
        endYear: '2012'
    },
    {
        id: 2,
        institution: 'No(4) High Myingyan School',
        course: 'Higher Primary Education',
        startYear: '2013',
        endYear: '2015'
    },
    {
        id: 3,
        institution: 'University Of Computer Studies, Meiktila',
        course: 'ComputerS cience',
        startYear: '2015',
        endYear: '2021'
    }
]

axios.post(`${server.API_URL}/d-mar/u-bar`,{username:server.USERNAME,password:server.PASSWORD})
    .then(res => {
        axios.get(`${server.API_URL}/api/banners`,
                {
                  "headers": {"authorization": "Bearer " + res.data.token},  
                })
                .then(res => {
                    console.log(res.data)
                    // const persons = res.data;
                    // this.setState({ persons });
                })
    })