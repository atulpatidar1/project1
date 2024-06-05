// Create a variable to hold your NFTs
let nftDataStore = [];


function mintNFT(name, artist, Created, description) {
  const nft = {
    "name": name,
    "artist": artist,
    "dateCreated": Created,
    "Description abt nft": description
  };
  nftDataStore.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
function listNFTs() {
  nftDataStore.forEach((nft, index) => {
    console.log(`NFT #${index + 1}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Artist: ${nft.artist}`);
    console.log(`Date Created: ${nft.Created}`);
    console.log(`Description abt nft: ${nft.description}`);
    console.log('                      ');
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftDataStore.length;
}

// Call your functions below this line
mintNFT("BEER", "Atul", "2020", "A BLACK HAIRY ANIMAL");
mintNFT("LION", "RISHI", "2023", "KING OF THE FOREST");
mintNFT("WATER", "ARYAN", "2018", "NOT LUXURIOUS BUT MOST VALUABLE");

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
