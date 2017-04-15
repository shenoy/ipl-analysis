class Match {
	constructor(data) {
		this.meta = data.meta;
		this.info = data.info;
		//initialize innings
		this.innings = data.innings.map(o=>{
			let innings_name = Object.keys(o).pop();
			o = o[innings_name];
			let batting_team = o.team, 
				bowling_team = this.info.teams.filter(d=>d!=batting_team).pop(),
				total_runs = 0,
				total_wickets = 0,
				last_del_no  = "0.0",
				deliveries =  o.deliveries.map(d=>{
					let del_no = Object.keys(d).pop();
					d = d[del_no];
					last_del_no = del_no; //update last_del_no
					total_runs += d.runs.total;
					total_wickets += d.wicket?1:0;
					return Object.assign({},d,{
						del_no,
						total_runs,
						total_wickets,
						innings_info: {
							batting_team,
							bowling_team,
							innings_name,	
						},
						match_info: this.info,
						match_meta: this.meta
					});
			})
			return {
				innings_name,
				batting_team,
				bowling_team,
				total_runs,
				total_wickets,
				deliveries,
				last_del_no
			};
		});	
	}

	get competitionName() {
		return this.competition_name;
	}

	set competitionName(n) {
		this.competition_name = n;
	}
	
	getDeliveries(f) { //get deliveries that match a certain criteria
		let deliveries = this.innings.map(i=>i.deliveries).reduce((r,d)=>r.concat(d));
		return f?deliveries.filter(f):deliveries;
	}	
}