// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ResumeNFT is ERC721A, Ownable {

    string public baseURI;

    constructor(string memory _baseURI) ERC721A("Punpom Resume", "PUNPOM") {
        baseURI = _baseURI;
    }

    function setBaseUri(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

   function tokenURI(uint _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "URI query for nonexistent token");
            return string(abi.encodePacked(baseURI, "resume.json"));
       
    }

     function mint() external {
        _safeMint(msg.sender, 1);
    }

}