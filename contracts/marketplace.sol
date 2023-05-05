// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract MarketPlace {
    //constructor and initializing values
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    //data structures
    struct Project {
        address project_owner;
        string project_topic;
        string project_title;
        string project_desc;
        string image_url;
        uint carbon_credits;
        string serialNumber;
        uint date_deployed;
        address[] buyers;
        uint[] amount;
    }

    //data structure for storing projects
    uint numberOfProjects = 0;
    mapping(address => Project[]) public myprojects;
    
    mapping(string => bool) public validated;
    mapping(string => bool) public retired;

    //function to create Projects
    function addToMyProjects(
        string memory _topic,
        string memory _title,
        string memory _desc,
        string memory _image,
        uint _credits,
        string memory _serialNumber
    ) public validatedDoc(_serialNumber) returns (uint) {
        Project[] storage projects = myprojects[msg.sender];
        Project memory project = Project({
            project_owner: msg.sender,
            project_topic: _topic,
            project_title: _title,
            project_desc: _desc,
            image_url: _image,
            carbon_credits: _credits,
            serialNumber: _serialNumber,
            date_deployed: block.timestamp,
            buyers: new address[](0),
            amount: new uint[](0)
        });
        projects.push(project);
        return projects.length;
    }

    function getAllMyProjects() public view returns (Project[] memory) {
        Project[] storage projects = myprojects[msg.sender];
        return projects;
    }

    //function to set validated documents and retired documents
    function setValidated(string memory _serialNumber) public {
        validated[_serialNumber] = true;
        retired[_serialNumber] = true;
    }

    //modifiers
    modifier validatedDoc(string memory _serialNumber) {
        require(validated[_serialNumber] == true, "Document not validated yet");
        _;
    }
}

