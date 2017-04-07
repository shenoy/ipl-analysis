"use strict";
window.onload = ()=>{
	let stage = gi('stage'),t1,t2,t3;
	t1=ce('div');ac(stage,t1);t1.innerHTML = 'I am a div';

	YAML.load('1082591.yaml',(data)=>{
		console.log(data);
		let m = new Match(data);
		console.log(m);
		m.innings[0].deliveries.forEach(d=>{
			if(d.del_no=='1.3')console.log(d.del_no,d);
		});
	});
};