// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../interfaces/IMochiNFT.sol";
import "../interfaces/IMochiEngine.sol";
import "../interfaces/IMochiPositionDescriptor.sol";

contract MochiNFTMigrated is IMochiNFT, ERC721Enumerable {
    IMochiEngine public immutable engine;
    address public descriptor;
    address public oldNft;
    uint256 public migrated;

    mapping(uint256 => MochiInfo) public info;

    constructor(address _engine) ERC721("MochiPositionNFT", "MOCHI-POS") {
        engine = IMochiEngine(_engine);
    }

    function migrateFrom(address _oldNft) external {
        require(msg.sender == engine.governance(), "!governance");
        require(address(this) == address(engine.nft()), "!set yet");
        oldNft = _oldNft;
    }

    function migrateToken(uint256 to) external {
        require(to <= IERC721Enumerable(oldNft).totalSupply(), "!oldToken");
        for(uint256 i = migrated; i < to; i++) {
            _mint(IERC721Enumerable(oldNft).ownerOf(i), i);
            info[i].asset = IMochiNFT(oldNft).asset(i);
        }
        migrated = to;
    }

    function setDescriptor(address _descriptor) external {
        require(msg.sender == engine.governance(), "!governance");
        descriptor = _descriptor;
    }

    function mint(address _asset, address _owner)
        external
        override
        returns (uint256 id)
    {
        require(
            engine.minter().isVault(msg.sender),
            "!vault"
        );
        require(migrated == IERC721Enumerable(oldNft).totalSupply(), "!migrated");
        id = totalSupply();
        _mint(_owner, id);
        info[id].asset = _asset;
    }

    function asset(uint256 _id) external view override returns (address) {
        return info[_id].asset;
    }

    function tokenURI(uint256 _id)
        public
        view
        override
        returns (string memory)
    {
        if (descriptor == address(0)) {
            return "";
        } else {
            return
                IMochiPositionDescriptor(descriptor).getTokenURI(
                    address(this),
                    _id
                );
        }
    }
}
