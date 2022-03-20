import React from "react";
class ContactPages extends React.Component {
	constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
			<header className="App-header">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.	1.0/css/bootstrap.min.css" 
				integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
				crossorigin="anonymous" 
			/>
			<div class="">
				<nav class="navbar navbar-dark bg-primary">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<alfa class="navbar-brand" >Contacts</alfa>
				</nav>
			</div>
			<div class="container">
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col">Username</th>
							<th scope="col">Full Name</th>
							<th scope="col">Email Address</th>
						</tr>
					</thead>
					<tbody>
						{
							items.map((item) => ( 
								<tr key = { item.id } >
									<td>{ item.username }</td> 
									<td>{ item.name }</td>  
									<td>{ item.email }</td> 
								</tr>
							))
						}
					</tbody>
				</table>
			</div>	
			</header>
        </div>
    );
}
}


export default ContactPages;
