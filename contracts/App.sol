// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Room{
    string name;
    address[] members;

    constructor(string memory _name){
        name = _name;
    }

    struct Message{
        address sender;
        string message;
    }

    Message[] messages;


    function addMember(address _newMember) external{
        members.push(_newMember);
    }

    function sendMessage(address _sender, string memory _message) external{
        Message memory message = Message(_sender,_message);
        messages.push(message);
    }

}

contract App{
    mapping (address=>string) public user;
    mapping(address=>address[])public userRooms;


    function createRoom(address _user,string memory _name) external{
        Room room = new Room(_name);
        userRooms[_user].push(address(room));
    }

    function getNumberOfRooms(address _user) public view returns(uint){
        return userRooms[_user].length;
    }

}