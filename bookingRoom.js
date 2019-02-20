var xhttp = new XMLHttpRequest();
var getResponseText;
let getAllRent = [];
let getAllRoomSharing = [];

function loadRoomDetails()
{
	xhttp.onreadystatechange = function()
	{
		if(xhttp.readyState == 4 && xhttp.status == 200)
		{
			var getResponseText = JSON.parse(xhttp.responseText);
			for(var i=0;i<=getResponseText.hotel.length;i++)
			{
				document.getElementById('chooseRoom').innerHTML += "<option value = '" + getResponseText.hotel[i].no  + "'>" + getResponseText.hotel[i].roomno + "</option>";
				getAllRent.push(getResponseText.hotel[i].rent);
				getAllRoomSharing.push(getResponseText.hotel[i].maxmember);
			}
		}
	}
	xhttp.open("GET", "room_details.json", true)
	xhttp.send();
}
function chooseRoom()
{
	var getRoomID = document.getElementById('chooseRoom').value;
	document.getElementById('roomRent').value = getAllRent[getRoomID];
	document.getElementById('roomSharing').value = getAllRoomSharing[getRoomID];
}
function addChild()
{
	document.getElementById('totalOccupy').value = parseFloat(document.getElementById('childTotal').value) + parseFloat(document.getElementById('adultTotal').value);
	if(document.getElementById('totalOccupy').value != document.getElementById('roomSharing').value)
	{
		document.getElementById('childTotal').value++;
	}
	else
	{
		alert("Max Reached");
	}
}
function deleteChild()
{
	if(document.getElementById('childTotal').value == 0)
	{
		alert("Slect Valid")
	}
	else
	{
		document.getElementById('childTotal').value--;
	}
}
function adultChild()
{
	if(document.getElementById('adultTotal').value == 0)
	{
		alert("Slect Valid")
	}
	else
	{
		document.getElementById('adultTotal').value--;
	}
}
function addAdult()
{
	document.getElementById('totalOccupy').value = parseFloat(document.getElementById('childTotal').value) + parseFloat(document.getElementById('adultTotal').value);

	if(document.getElementById('totalOccupy').value != document.getElementById('roomSharing').value)
	{
		document.getElementById('adultTotal').value++;
	}
	else
	{
		alert("Max Reached");
	}
}
function deleteAdult()
{
	if(document.getElementById('adultTotal').value == 0)
	{
		alert("Slect Valid")
	}
	else
	{
		document.getElementById('adultTotal').value--;
	}
}
function generateRent()
{
	document.getElementById('rentRate').value = document.getElementById('days').value * document.getElementById('roomRent').value;
}
function bookHotelRoom()
{
	if(document.getElementById('chooseRoom').value == "Select" && document.getElementById('days').value == "")
	{
		alert("All Fields are Mandatory");
	}
	else
	{
		alert("Room Has been booked Success")
	}
}