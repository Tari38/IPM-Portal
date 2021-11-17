import React from "react";
import $ from "jquery";
import "./Royalty-calculator.css";

export default function RoyaltyCalculator() {

  $(document).ready(function(){

    var totalRevenue = 0; 
    var revenue = 0; 
    var authorRevenue = 0; 
    var authorCash = 0; 
  
  
  $("#ratebox").hide(); 
  
  
  $("#button1").click(function(){
    var price = $("#price").val(); 
    var copiesSold = $("#copiesSold").val(); 
    var advance = $("#advance").val();
    var royaltyRate = $("#royaltyRate").val(); 
    var agentsCom = $("#agentsCom").val();
  
    calculateRevenue(price, copiesSold, advance, royaltyRate, agentsCom);
    showMoney(); 
  
  });
  
  
  $("#button2").click(function(){
    $('#form')[0].reset();
    $("#answer").remove(); 
    $("#ratebox").hide(); 
  }); 
  
  
  
  $("#showRates").click(function(){
    $("#ratebox").show();
  
  }); 
  
  $("#hideRates").click(function(){
    $("#ratebox").hide(); 
  
  }); 
  
  
  function calculateRevenue (price, copiesSold, advance, royaltyRate, agentsCom) {
  
    totalRevenue = price * copiesSold; 
    authorRevenue = ((royaltyRate/100) * totalRevenue) - advance;
    authorCash = authorRevenue * (1-(agentsCom/100));
  }
  
  
  function showMoney (){
  
  $("#royaltybox").append('<div id="answer"><h6> $' + authorCash.toFixed(2) + '</h6></div>');
  }
  
  
  }); 

return (

<>
<header>
		<h1>Royalty Calculator</h1>
		<h2>for authors</h2>
	</header>


	
	<div id="mainbox">	


		<div id="leftbox">

			<form name = "royaltycalculator" id ="form">

				<div class="secondbox">	
					<label for="copiesSold">
						<h3>Copies Sold</h3>
						<h5 class="sign">#</h5>
						<input autofocus id="copiesSold" name = "copiesSold"/>
					</label>
				</div>

				<div class="secondbox">
					<label for="price">
						<h3>Price</h3>
						<h5 class="sign">$</h5>
						<input id="price" name = "price"/>
					</label>
				</div>

				<div class="secondbox">
					<label for="advance">
						<h3>Advance</h3>
						<h5 class="sign">$</h5>
						<input id="advance" name = "advance"/>
					</label>
				</div>


				<div class="clearfix"></div>
		
				<div class="secondbox">
					<label for="agentsCom">
						<h3>Agent's Cut</h3>
						<input id="agentsCom" name = "agentsCom"/>
						<div class="sign2">
							<h5>%</h5>
						</div>
					</label>
						
							<div><p>Standard rate is 15%</p>
							</div>
				</div>

				<div class="secondbox">
					<label for="royaltyRate">
						<h3>Royalty Rate</h3>
						<input id="royaltyRate" name = "royaltyRate"/>
					</label>
						<div class="sign2">
							<h5>%</h5>
						</div>
							<div id="showRates">
								<p>Show standard royalty rates</p>
							</div>
				</div>	
			
			</form>
      {/* <!--End Form--> */}


			<div class="clearfix"></div>


			<div id="button1"><h4>Calculate</h4></div>

			<div id="button2"><h4>Clear All</h4></div>


		</div>
    {/* <!--end left box div--> */}

			<div id="rightbox">

				<div id="royaltybox"><h3>Your Royalties:</h3></div>

				<div id="ratebox"><h3>Royalty Rates</h3>
					<p>Digital:</p>
						<ul>
							<li>• <a href="https://kdp.amazon.com/">Amazon: 35% or 70%</a></li>
							<li>• <a href="http://www.pubit.com">Barnes and Noble: 40%</a></li>
							<li>• <a href="http://www.kobobooks.com/kobowritinglife">Kobo: 45% or 70%</a></li>
						</ul>
					<p>Print: </p>
						<ul>
							<li>• MMPB: 8%</li>
							<li>• Trade: 7.5%</li>
							<li>• Hardcover: 10%-15%</li>
						</ul>
					<div id="hideRates"><p>Hide</p></div>
				</div>
        {/* <!--close ratebox div--> */}


			</div>
      {/* <!---close rightbox div--> */}


	</div>
  {/* <!--End MainBox Div--> */}

	

	<div class="clearfix"></div>
</>
)}