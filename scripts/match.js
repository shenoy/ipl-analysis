function Match(data){
	this.meta = data.meta;
	this.info = data.info;
	//initialize innings
	this.innings = data.innings.map(o=>{
		let innings_name = Object.keys(o).pop();
		o = o[innings_name];
		let batting_team = o.team, 
			bowling_team = this.info.teams.filter(d=>d!=batting_team).pop(),
			total = 0,
			wickets = 0,
			last_del_no  = "0.0",
			deliveries =  o.deliveries.map(d=>{
				let del_no = Object.keys(d).pop();
				d = d[del_no];
				last_del_no = del_no; //update last_del_no
				total += d.runs.total;
				wickets += d.wicket?1:0;
				return _.extend({},d,{
					// batting_team,
					// bowling_team,
					// innings_name,
					// city: this.info.city,
					// venue: this.info.venue
					del_no,
					total
				});
		})
		return {
			innings_name,
			batting_team,
			bowling_team,
			total,
			wickets,
			deliveries,
			last_del_no
		};
	});
}