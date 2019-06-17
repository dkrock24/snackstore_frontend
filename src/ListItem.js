import React from 'react';

const ListItem = (props) => {
	 
	return (
        

        <div  key={props.index} className="col-lg-4 col-md-4 mb-4">
        	
	        <div className="card h-100">
	         	<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
	          		<div className="card-body">
	            		<h4 className="card-title">
	              		<a href="#">{props.item}</a>
	            		</h4>
	            		<h5>{props.price}</h5>
	            		<p className="card-text">{props.description}</p>
	          		</div>
	          		<div className="card-footer">
	            		<small className="text-muted">★ ★ ★ ★ ☆</small>
	          		</div>
	        </div>

      	</div>



      );
};

export default ListItem;