import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from './card';

class Dashboard extends React.Component{

    
        constructor(props) {
            super(props);
            this.state = {
              data: [],
            };
          }


         async componentDidMount() {

            let response = await fetch("https://covid19india.p.rapidapi.com/getIndiaStateData", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid19india.p.rapidapi.com",
                    "x-rapidapi-key": "d86b96d2demsha82c975ff1c4f10p15548bjsn492e2a97fbb5"
                }
                    });


                    let data = await response.json();

                    console.log(data);
                    console.log('response', data.response);

                    this.setState({data:data.response});

                    console.log('data',data.response);

                    // return data;

             
          }

          render(){


        return (
            <div>

              <h1>Corona Statewise Dashboard</h1>

<Container maxWidth="lg"   style={{marginTop:20}}>

<Grid container spacing={1}>
 {this.state.data.map((data, index) => (      
   <Grid item xs={12} md={4} lg={4}>
     <div >
     <Card key={index} data = {data}/>
     </div>
   </Grid>
 ))}
</Grid>
</Container>    
               
              
                

               
            </div>
        )
            
        ;
    }

}

export default Dashboard;