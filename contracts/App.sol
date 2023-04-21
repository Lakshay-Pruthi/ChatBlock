// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Room{

    struct User{
        string name;
        address member;
    }

    User[] members;

    mapping(address => string) profile;

    struct Message{
        address sender;
        string message;
    }

    Message[] messages;


    function addMember(string memory _name,address _newMember) external{
        User memory user = User(_name,_newMember);
        members.push(user);
    }

    function sendMessage(address _sender, string memory _message) external{
        Message memory message = Message(_sender,_message);
        messages.push(message);
    }

}

contract App{

    struct ROOM{
        string name;
        address roomAddress;
    }

    mapping(address=>ROOM[])public userRooms;


    function addRoom(address _user,string memory _name) external{
        Room room = new Room();
        ROOM memory newRoom = ROOM(_name,address(room));
        userRooms[_user].push(newRoom);
    }

    function getNumberOfRooms(address _user) public view returns(uint){
        return userRooms[_user].length;
    }

}